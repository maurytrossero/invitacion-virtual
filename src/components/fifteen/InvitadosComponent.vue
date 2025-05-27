<!-- src/components/VistaAsistentes.vue -->
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
            <strong>Familia {{ i + 1 }}:</strong>
            <div>
              <small><strong>Código:</strong> {{ familia.codigoFamilia || 'N/A' }}</small>
            </div>
            <div v-if="familia.telefono">
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
            
            <!-- Aquí agregamos el título -->
            <div class="titulo-asistentes">Asistentes</div>
            <ul class="asistentes-lista">
              <li v-for="(a, j) in familia.asistentes" :key="j">
                {{ a.nombre }} {{ a.apellido }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

const familias = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "familias"));
  familias.value = querySnapshot.docs.map((doc) => doc.data());
});

/**
 * Valida si el teléfono es válido para formato WhatsApp argentino
 * Se espera que no tenga 0 ni 15 y tenga 10 dígitos
 * @param {string} tel 
 * @returns {boolean}
 */
function esTelefonoValido(tel) {
  const limpio = tel.replace(/\D/g, ""); // solo números
  // El formato esperado para Argentina: 10 dígitos, sin 0 ni 15 al inicio
  // Ejemplo válido: 9112345678
  return limpio.length === 10 && !limpio.startsWith("0") && !limpio.startsWith("15");
}

/**
 * Formatea el teléfono para link WhatsApp
 * Agrega prefijo +54 para Argentina
 * @param {string} tel 
 * @returns {string}
 */
function formatearTelefonoWA(tel) {
  let limpio = tel.replace(/\D/g, ""); // números
  // Asegurar que no comience con 0 ni 15
  if (limpio.startsWith("0")) limpio = limpio.substring(1);
  if (limpio.startsWith("15")) limpio = limpio.substring(2);
  return "54" + limpio; // código país Argentina + número limpio
}
</script>

<style scoped>
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
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.familia-item strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.asistentes-lista {
  list-style: none;
  padding-left: 1rem;
  margin: 0;
  color: #eee;
  font-size: 1rem;
}

.asistentes-lista li {
  margin-bottom: 0.3rem;
}

.whatsapp-link {
  color: #25d366;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
}

/* Scrollbar para lista */
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

/* Responsive */
@media (max-width: 400px) {
  .contenido {
    padding: 1rem 1.5rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  .familia-item {
    padding: 0.5rem 0.75rem;
  }
}
</style>
