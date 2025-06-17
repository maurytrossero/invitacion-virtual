<template>
  <div
    class="container"
    :style="{
      backgroundImage: `url('https://dl.dropboxusercontent.com/scl/fi/ucpo6t3d9by764ew4yu27/fondo-topaz.png?rlkey=qdnl6efzqjgudccawx19t3yzr&st=mom1g4qi')`
    }"
  >
    <div class="overlay">
      <div class="contenido">

        <!-- Mensaje principal -->
        <p class="mensaje">
          Podés confirmar y realizar el pago hasta el <strong>05/08</strong>
        </p>

        <!-- Botones principales -->
        <div class="botones" v-if="!formVisible && !mostrarFormularioEdicion">
          <button class="boton" @click="formVisible = true">Sí, asistiré</button>
          <button class="boton" @click="mostrarAlertaNoAsistira">No podré asistir</button>
        </div>

      <!-- Formulario confirmación asistencia -->
      <div v-if="formVisible" class="formulario">
        <div class="campos">
          <input v-model="nombre" type="text" placeholder="Nombre" />
          <input v-model="apellido" type="text" placeholder="Apellido" />
          <input v-model="telefono" type="tel" placeholder="Teléfono (ej: 1123456789)" />
          <button @click="agregarAsistente" class="boton">Agregar</button>
          <button @click="cancelarFormulario" class="boton cancelar">Cancelar</button>
        </div>

        <ul class="lista" style="margin-top: 1rem;">
          <li v-for="(a, i) in asistentes" :key="i">{{ a.nombre }} {{ a.apellido }}</li>
        </ul>

        <button @click="confirmarAsistencia" class="boton confirmar" style="margin-top: 1rem;">
          Confirmar asistencia
        </button>

        <!-- Botón editar dentro del formulario -->
        <button @click="() => { formVisible = false; mostrarFormularioEdicion = true }" class="boton cancelar" style="margin-top: 1rem;">
          Editar asistentes
        </button>
      </div>


        <!-- Formulario edición asistentes por código -->
        <div v-if="mostrarFormularioEdicion" class="formulario-edicion">
          <h3>Editar asistentes - Código de familia</h3>

        <input
          v-model="codigoBusqueda"
          placeholder="Ingresá código de familia"
          style="text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 0.75rem;"
        />
        <div class="botones" style="width: 100%; justify-content: center; gap: 1rem; margin-bottom: 1rem;">
          <button @click="buscarFamilia" class="boton">Buscar</button>
          <button @click="cerrarEdicion" class="boton cancelar">Volver</button>
        </div>


          <div v-if="documentoEdicionId" style="margin-top: 1rem; width: 100%;">
            <input v-model="telefonoEdicion" placeholder="Teléfono" />

            <ul class="lista" style="margin-top: 1rem;">
              <li v-for="(a, i) in asistentesEdicion" :key="i" class="lista-edicion">
                <input v-model="a.nombre" placeholder="Nombre" />
                <input v-model="a.apellido" placeholder="Apellido" />
                <button @click="eliminarAsistente(i)" class="boton cancelar">Eliminar</button>
              </li>
            </ul>

            <button @click="agregarAsistenteEdicion" class="boton" style="margin-top: 0.5rem;">Agregar asistente</button>

            <div class="botones" style="margin-top: 1rem; justify-content: center;">
              <button @click="guardarCambios" class="boton confirmar">Guardar cambios</button>
              <button @click="cerrarEdicion" class="boton cancelar">Cancelar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { collection, addDoc, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import Swal from 'sweetalert2'

const formVisible = ref(false)
const nombre = ref('')
const apellido = ref('')
const telefono = ref('')
const asistentes = ref([])

const mostrarFormularioEdicion = ref(false)
const codigoBusqueda = ref('')
const telefonoEdicion = ref('')
const asistentesEdicion = ref([])
const documentoEdicionId = ref(null)

// Genera un código de familia alfanumérico de 6 caracteres en mayúscula
function generarCodigoFamilia() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

function agregarAsistente() {
  if (!nombre.value || !apellido.value) {
    alert('Por favor completá nombre y apellido del asistente.')
    return
  }
  asistentes.value.push({ nombre: nombre.value.trim(), apellido: apellido.value.trim() })
  nombre.value = ''
  apellido.value = ''
}

// Validación básica para teléfono: debe tener al menos 7 dígitos numéricos
function validarTelefono(tel) {
  const soloNumeros = tel.replace(/\D/g, '')
  return soloNumeros.length >= 7
}

function cancelarFormulario() {
  formVisible.value = false
  nombre.value = ''
  apellido.value = ''
  telefono.value = ''
  asistentes.value = []
}

function mostrarAlertaNoAsistira() {
  Swal.fire({
    icon: 'info',
    title: '¡Gracias por avisar!',
    html: '<p style="font-family: Bahnschrift, sans-serif; font-size: 1rem;">Si cambiás de opinión, podés confirmar asistencia hasta el <strong>05/08</strong>.</p>',
    confirmButtonText: 'Entendido',
    background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)', // fondo similar al overlay
    color: '#ffffff',
    confirmButtonColor: '#ffffff',
    customClass: {
      popup: 'custom-alert-popup',
      confirmButton: 'custom-alert-button'
    }
  })
}

async function confirmarAsistencia() {
  if (asistentes.value.length === 0) {
    alert('Agregá al menos un asistente.')
    return
  }
  if (!validarTelefono(telefono.value)) {
    alert('Por favor ingresá un teléfono válido (al menos 7 dígitos).')
    return
  }

  const codigoFamilia = generarCodigoFamilia()

  try {
    await addDoc(collection(db, 'familias'), {
      codigoFamilia,
      telefono: telefono.value,
      asistentes: asistentes.value,
      confirmacion: true,
      timestamp: new Date()
    })

    formVisible.value = false
    asistentes.value = []
    telefono.value = ''

    await Swal.fire({
      icon: 'success',
      title: '¡Asistencia confirmada!',
      html: `
        <p style="font-family: Bahnschrift, sans-serif; font-size: 1rem;">
          Tu <strong>código de familia</strong> es:
        </p>
        <div style="margin: 0.5rem auto 1rem; padding: 0.75rem 1.25rem; font-size: 1.5rem; font-weight: bold; border-radius: 1rem; background-color: rgba(255,255,255,0.2); width: fit-content;">
          ${codigoFamilia}
        </div>
        <p style="font-family: Bahnschrift, sans-serif; font-size: 0.95rem;">
          Te recomendamos anotarlo o hacerle una captura para futuras modificaciones.
        </p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Copiar código',
      cancelButtonText: 'Cerrar',
      background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)',
      color: '#ffffff',
      confirmButtonColor: '#ffffff',
      cancelButtonColor: '#888',
      customClass: {
        popup: 'custom-alert-popup',
        confirmButton: 'custom-alert-button',
        cancelButton: 'custom-alert-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigator.clipboard.writeText(codigoFamilia)
        Swal.fire({
          icon: 'success',
          title: '¡Código copiado!',
          background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)',
          color: '#ffffff',
          confirmButtonText: 'Ok',
          customClass: {
            popup: 'custom-alert-popup',
            confirmButton: 'custom-alert-button'
          }
        })
      }
    })

  } catch (e) {
    alert('Hubo un error al confirmar: ' + e.message)
  }
}


// Buscar familia por código
async function buscarFamilia() {
  if (!codigoBusqueda.value) {
    alert('Por favor ingresá un código de familia.')
    return
  }
  try {
    const familiasRef = collection(db, 'familias')
    const q = query(familiasRef, where('codigoFamilia', '==', codigoBusqueda.value.trim().toUpperCase()))
    const querySnapshot = await getDocs(q)
    if (querySnapshot.empty) {
      alert('No se encontró ninguna familia con ese código.')
      return
    }
    querySnapshot.forEach((docSnap) => {
      documentoEdicionId.value = docSnap.id
      const data = docSnap.data()
      telefonoEdicion.value = data.telefono
      asistentesEdicion.value = data.asistentes.map(a => ({ ...a })) // clonamos para editar sin afectar original
    })
  } catch (e) {
    alert('Error al buscar la familia: ' + e.message)
  }
}

function agregarAsistenteEdicion() {
  asistentesEdicion.value.push({ nombre: '', apellido: '' })
}

function eliminarAsistente(index) {
  asistentesEdicion.value.splice(index, 1)
}

async function guardarCambios() {
  for (const a of asistentesEdicion.value) {
    if (!a.nombre.trim() || !a.apellido.trim()) {
      alert('Por favor completá nombre y apellido de todos los asistentes.')
      return
    }
  }
  if (!validarTelefono(telefonoEdicion.value)) {
    alert('Por favor ingresá un teléfono válido (al menos 7 dígitos).')
    return
  }
  try {
    const docRef = doc(db, 'familias', documentoEdicionId.value)
    await updateDoc(docRef, {
      telefono: telefonoEdicion.value,
      asistentes: asistentesEdicion.value,
      timestamp: new Date()
    })
    alert('Cambios guardados correctamente.')
    cerrarEdicion()
  } catch (e) {
    alert('Error al guardar los cambios: ' + e.message)
  }
}

function cerrarEdicion() {
  mostrarFormularioEdicion.value = false
  codigoBusqueda.value = ''
  telefonoEdicion.value = ''
  asistentesEdicion.value = []
  documentoEdicionId.value = null
}
</script>

<style scoped>
@font-face {
  font-family: 'Bahnschrift';
  src: url('@/assets/fonts/Bahnschrift.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
  text-align: center;
  color: white;
  backdrop-filter: blur(4px);
}

.contenido {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.mensaje {
  font-size: 1.125rem;
  font-weight: 300;
  font-style: italic;
  margin: 0;
  font-family: 'Constantia', serif;
}

@media (min-width: 768px) {
  .mensaje {
    font-size: 1.25rem;
  }
}

.botones {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.boton {
  font-family: 'Bahnschrift', sans-serif;
  flex: 1 1 auto;
  min-width: 120px;
  max-width: 180px;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.875rem;
  transition: transform 0.2s ease, background-color 0.3s, color 0.3s;
  cursor: pointer;
  white-space: nowrap;
}

.boton:hover {
  background-color: white;
  color: black;
  transform: scale(1.05);
}

@media (max-width: 400px) {
  .botones {
    flex-direction: column;
  }
  .boton {
    max-width: 100%;
    font-size: 1rem;
  }
}

.tarjeta {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  width: 90vw;
  max-width: 11rem;
  aspect-ratio: 11 / 8;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.imagen-tarjeta {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icono-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icono {
  width: 2.5rem;
  height: 2.5rem;
  color: white;
}

.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.campos {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.campos input {
  padding: 0.5rem;
  border-radius: 9999px;
  border: none;
  text-align: center;
}

.lista {
  margin-top: 1rem;
}
.lista-edicion {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
}

.lista-edicion input {
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  border: none;
  flex: 1 1 auto;
  font-family: 'Bahnschrift', sans-serif;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.confirmar {
  background-color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
}
.cancelar {
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-weight: normal;
}

.cancelar:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: black;
}

.formulario-edicion input {
  padding: 0.5rem;
  border-radius: 9999px;
  border: none;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  text-align: center;
  width: 100%;
  font-family: 'Bahnschrift', sans-serif;
}

/* ALERTA PERSONALIZADA SWEETALERT2 */
@font-face {
  font-family: 'Bahnschrift';
  src: url('@/assets/fonts/Bahnschrift.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.bahnschrift-text {
  font-family: 'Bahnschrift', sans-serif;
  font-size: 1rem;
  color: white;
  text-align: center;
}

.bahnschrift-small {
  font-family: 'Bahnschrift', sans-serif;
  font-size: 0.95rem;
  color: white;
  text-align: center;
}

.codigo-box {
  margin: 0.5rem auto 1rem;
  padding: 0.75rem 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  width: fit-content;
  color: white;
  font-family: 'Bahnschrift', sans-serif;
}

/* SweetAlert personalizados */
:deep(.custom-alert-popup) {
  border-radius: 1.5rem !important;
  padding: 1.5rem !important;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1) !important;
  font-family: 'Bahnschrift', sans-serif !important;
  text-align: center !important;
  background: rgba(30, 30, 30, 0.5) !important; /* transparencia 50% */
  color: white !important;
  backdrop-filter: blur(6px) !important;
}

:deep(.custom-alert-popup h2) {
  font-family: 'Bahnschrift', sans-serif !important;
  font-weight: bold !important;
  color: white !important;
}

:deep(.custom-alert-button) {
  background-color: #ffffff !important;
  color: #000 !important;
  font-family: 'Bahnschrift', sans-serif !important;
  border-radius: 9999px !important;
  padding: 0.5rem 1.5rem !important;
  font-weight: bold !important;
  transition: all 0.3s ease !important;
  text-shadow: none !important;
}

:deep(.custom-alert-button:hover) {
  background-color: #f0f0f0 !important;
  color: #333 !important;
}

:deep(.custom-alert-popup .swal2-icon) {
  color: white !important;
  border-color: white !important;
}

:deep(.custom-alert-popup .swal2-icon-content) {
  color: white !important;
}
</style>
