<template>
  <div class="cuenta-regresiva">
    <div class="overlay">
      <h1>Emma Alejandra & Jorge Antonio</h1>
      <h2>NUESTRA BODA | 23/11/2024</h2>
      <div class="contador">
        <div class="tiempo">
          <transition-group name="slide-fade" tag="div" class="digit">
            <span v-for="(digit, index) in days" :key="'days-' + index">{{ digit }}</span>
          </transition-group>
          <p>Días</p>
        </div>
        <div class="tiempo">
          <transition-group name="slide-fade" tag="div" class="digit">
            <span v-for="(digit, index) in hours" :key="'hours-' + index">{{ digit }}</span>
          </transition-group>
          <p>Horas</p>
        </div>
        <div class="tiempo">
          <transition-group name="slide-fade" tag="div" class="digit">
            <span v-for="(digit, index) in minutes" :key="'minutes-' + index">{{ digit }}</span>
          </transition-group>
          <p>Minutos</p>
        </div>
        <div class="tiempo">
          <transition-group name="slide-fade" tag="div" class="digit">
            <span v-for="(digit, index) in seconds" :key="'seconds-' + index">{{ digit }}</span>
          </transition-group>
          <p>Segundos</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const targetDate = new Date('2024-11-23T17:00:00').getTime()
const days = ref<string[]>(['0', '0'])
const hours = ref<string[]>(['0', '0'])
const minutes = ref<string[]>(['0', '0'])
const seconds = ref<string[]>(['0', '0'])

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  const d = Math.floor(distance / (1000 * 60 * 60 * 24))
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((distance % (1000 * 60)) / 1000)

  days.value = d.toString().padStart(2, '0').split('')
  hours.value = h.toString().padStart(2, '0').split('')
  minutes.value = m.toString().padStart(2, '0').split('')
  seconds.value = s.toString().padStart(2, '0').split('')
}

onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 1000) // Actualiza cada segundo
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.cuenta-regresiva {
  position: relative;
  height: 100vh;
  background: url('https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/07/26/16588301170836.jpg') no-repeat center center;
  background-size: cover;
  overflow: hidden; /* Asegura que los elementos hijos no sobresalgan */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-family: 'Great Vibes', cursive;
  padding: 20px;
  box-sizing: border-box; /* Incluye el padding dentro del tamaño del elemento */
}

h1 {
  font-size: 3em;
  margin: 0; /* Elimina el margen superior e inferior */
}

h2 {
  font-size: 2em;
  font-family: 'Open Sans', sans-serif;
  margin: 10px 0; /* Ajusta el margen para evitar desbordamientos */
}

.contador {
  display: flex;
  gap: 10px; /* Reduce el espacio horizontal */
  margin-top: 20px;
  flex-wrap: nowrap; /* Evita el ajuste de línea */
  justify-content: center;
  overflow-x: auto; /* Permite el desplazamiento horizontal en caso de desbordamiento */
}

.tiempo {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px; /* Reduce los márgenes laterales */
}

.digit {
  display: flex;
  flex-direction: row;
  height: 60px; /* Ajusta el alto según el tamaño del dígito */
  overflow: hidden;
}

.digit span {
  font-size: 2em; /* Reduce el tamaño de fuente para ajustar el texto */
  display: inline-block;
  width: 100%;
}

.tiempo p {
  font-size: 1em; /* Ajusta el tamaño del texto */
  margin: 0;
}

/* Animación para los cambios */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Responsive styling */
@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  .digit span {
    font-size: 1.5em; /* Reduce aún más el tamaño de fuente en móviles */
  }

  .tiempo p {
    font-size: 0.8em; /* Ajusta el tamaño del texto en móviles */
  }

  .contador {
    gap: 5px; /* Ajusta el espacio entre los elementos */
    padding: 10px; /* Agrega padding para evitar el desbordamiento */
  }

  .overlay {
    padding: 10px;
  }
}
</style>
