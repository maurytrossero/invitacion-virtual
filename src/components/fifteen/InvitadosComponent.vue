<template>
  <div
    class="container"
    :style="{ backgroundImage: `url('https://blog.hiltoncolombia.com/hs-fs/hubfs/1%20(66).jpg?width=5568&name=1%20(66).jpg')` }"
  >
    <div class="overlay">
      <div class="contenido">
        <h2 class="titulo-fijo">Lista de asistentes confirmados</h2>
        <div class="scroll-familias">
          <ul class="familias-lista grid-familias">
            <li v-for="(familia, i) in familias" :key="i" class="familia-item">
              <div class="card-header">
                <div class="icono"><i class="fas fa-users"></i></div>
                <div><strong>Familia {{ i + 1 }}</strong></div>
              </div>

              <div class="detalle-linea">
                <i class="fas fa-id-badge"></i>
                <small><strong>Código:</strong> {{ familia.codigoFamilia || 'N/A' }}</small>
              </div>

              <div class="detalle-linea" v-if="familia.telefono">
                <i class="fas fa-phone"></i>
                <small>
                  <strong>Teléfono:</strong>
                  <template v-if="esTelefonoValido(familia.telefono)">
                    <a
                      :href="`https://wa.me/${formatearTelefonoWA(familia.telefono)}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="whatsapp-link"
                    >
                      {{ familia.telefono }}
                    </a>
                  </template>
                  <template v-else>
                    {{ familia.telefono }}
                  </template>
                </small>
              </div>

              <div class="titulo-asistentes">
                <i class="fas fa-user-friends"></i> Asistentes
              </div>
              <ul class="asistentes-lista">
                <li v-for="(a, j) in familia.asistentes" :key="j">
                  <i class="fas fa-user"></i> {{ a.nombre }} {{ a.apellido }}
                </li>
              </ul>

              <div class="botones-acciones">
                <button @click="editarFamilia(familia)" class="btn-editar">
                  <i class="fas fa-edit"></i> Editar
                </button>
                <button @click="eliminarFamilia(i)" class="btn-eliminar">
                  <i class="fas fa-trash"></i> Eliminar
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <EditfamilyModal
      v-if="mostrarModal"
      :familia="familiaSeleccionada"
      @cerrar="mostrarModal = false"
      @guardado="cargarFamilias"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import EditfamilyModal from './EditfamilyModal.vue';

const familias = ref([]);
const mostrarModal = ref(false);
const familiaSeleccionada = ref(null);

onMounted(async () => {
  await cargarFamilias();
});

async function cargarFamilias() {
  const querySnapshot = await getDocs(collection(db, 'familias'));
  familias.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function eliminarFamilia(index) {
  const familia = familias.value[index];
  const confirmado = window.confirm(`¿Estás seguro de eliminar la Familia ${index + 1}?`);
  if (confirmado) {
    try {
      await deleteDoc(doc(db, 'familias', familia.id));
      familias.value.splice(index, 1);
    } catch (error) {
      console.error('Error al eliminar familia:', error);
      alert('Hubo un error al intentar eliminar la familia.');
    }
  }
}

function editarFamilia(familia) {
  familiaSeleccionada.value = { ...familia };
  mostrarModal.value = true;
}

function esTelefonoValido(tel) {
  const limpio = tel.replace(/\D/g, '');
  return limpio.length === 10 && !limpio.startsWith('0') && !limpio.startsWith('15');
}

function formatearTelefonoWA(tel) {
  let limpio = tel.replace(/\D/g, '');
  if (limpio.startsWith('0')) limpio = limpio.substring(1);
  if (limpio.startsWith('15')) limpio = limpio.substring(2);
  return '54' + limpio;
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

@font-face {
  font-family: "Bahnschrift";
  src: url("@/assets/fonts/Bahnschrift.woff") format("woff");
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: center;
  color: white;
  backdrop-filter: blur(4px);
}

.contenido {
  max-width: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
  font-family: "Bahnschrift", sans-serif;
}

.scroll-familias {
  max-height: calc(100vh - 7rem);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.scroll-familias::-webkit-scrollbar {
  width: 6px;
}
.scroll-familias::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

h2 {
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

* {
  font-family: "Bahnschrift", sans-serif;
}

.grid-familias {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid-familias {
    grid-template-columns: 1fr 1fr;
  }
}

.familia-item {
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.2rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-header {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.detalle-linea {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
  color: #ddd;
}

.asistentes-lista li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #eee;
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
}

.titulo-asistentes {
  font-size: 1.05rem;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: #fff;
}

.botones-acciones {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.btn-editar,
.btn-eliminar {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.btn-editar {
  background-color: #4fc3f7;
  color: white;
}
.btn-editar:hover {
  background-color: #039be5;
}

.btn-eliminar {
  background-color: #ef5350;
  color: white;
}
.btn-eliminar:hover {
  background-color: #d32f2f;
}

.titulo-fijo {
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  padding-bottom: 0.5rem;
  z-index: 10;
}

@media (max-width: 400px) {
  .contenido {
    padding: 1rem 1.5rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  .familia-item {
    padding: 0.75rem 1rem;
  }
  .card-header,
  .detalle-linea,
  .asistentes-lista li {
    font-size: 0.9rem;
  }
  .btn-eliminar {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>
