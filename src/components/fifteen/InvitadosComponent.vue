<template>
  <div
    class="container"
    :style="{ backgroundImage: `url('https://blog.hiltoncolombia.com/hs-fs/hubfs/1%20(66).jpg?width=5568&name=1%20(66).jpg')` }"
  >
    <div class="overlay">
      <div class="contenido">
        <h2>Lista de asistentes confirmados</h2>
        <ul class="familias-lista">
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
                    >{{ familia.telefono }}</a
                  >
                </template>
                <template v-else>
                  {{ familia.telefono }}
                </template>
              </small>
            </div>

            <div class="titulo-asistentes"><i class="fas fa-user-friends"></i> Asistentes</div>
            <ul class="asistentes-lista">
              <li v-for="(a, j) in familia.asistentes" :key="j">
                <i class="fas fa-user"></i> {{ a.nombre }} {{ a.apellido }}
              </li>
            </ul>

            <div class="botones-acciones">
              <button @click="eliminarFamilia(i)" class="btn-eliminar">
                <i class="fas fa-trash"></i> Eliminar
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const familias = ref([]);

onMounted(async () => {
  await cargarFamilias();
});

async function cargarFamilias() {
  const querySnapshot = await getDocs(collection(db, "familias"));
  familias.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function eliminarFamilia(index) {
  const familia = familias.value[index];
  const confirmado = window.confirm(`¿Estás seguro de eliminar la Familia ${index + 1}?`);
  if (confirmado) {
    try {
      await deleteDoc(doc(db, "familias", familia.id));
      familias.value.splice(index, 1);
    } catch (error) {
      console.error("Error al eliminar familia:", error);
      alert("Hubo un error al intentar eliminar la familia.");
    }
  }
}

function esTelefonoValido(tel) {
  const limpio = tel.replace(/\D/g, "");
  return limpio.length === 10 && !limpio.startsWith("0") && !limpio.startsWith("15");
}

function formatearTelefonoWA(tel) {
  let limpio = tel.replace(/\D/g, "");
  if (limpio.startsWith("0")) limpio = limpio.substring(1);
  if (limpio.startsWith("15")) limpio = limpio.substring(2);
  return "54" + limpio;
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
  background-color: rgba(0, 0, 0, 0.4);
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
  max-width: 500px;
  width: 100%;
  background: rgba(255 255 255 / 0.1);
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
  font-family: "Bahnschrift", sans-serif;
}

h2 {
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-family: "Bahnschrift", sans-serif;
}

.familias-lista {
  list-style: none;
  padding: 0;
  max-height: 60vh;
  overflow-y: auto;
  text-align: left;
}

.familia-item {
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.detalle-linea {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.titulo-asistentes {
  font-size: 1.05rem;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: #eee;
}

.asistentes-lista {
  list-style: none;
  padding-left: 1rem;
  margin: 0;
  color: #eee;
  font-size: 0.95rem;
}

.asistentes-lista li {
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.whatsapp-link {
  color: #25d366;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
}

.botones-acciones {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.75rem;
}

.btn-eliminar {
  background-color: #ff5252;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: background-color 0.2s ease;
}

.btn-eliminar:hover {
  background-color: #e53935;
}

.familias-lista::-webkit-scrollbar {
  width: 8px;
}
.familias-lista::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.familias-lista::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
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
