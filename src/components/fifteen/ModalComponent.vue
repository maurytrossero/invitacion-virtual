<template>
  <div
    class="card"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <div class="card-inner" :class="{ flipped: isFlipped }">
      <!-- Frente -->
      <div
        class="card-front"
        :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${frontImage})` }"
      >
        <div class="front-content">
          <component :is="FrontIconComponent" size="48" class="icon" />
          <p v-if="frontText" class="front-text">{{ frontText }}</p>
        </div>
      </div>

      <!-- Atrás -->
      <div class="card-back">
        <img src="https://dl.dropboxusercontent.com/scl/fi/f671ih37wawblpzykpmkq/tarjeta.png?rlkey=g372wrfe4b8zrxbwv2nstfoqa" alt="Decoración" class="back-decoration" />
        <div class="back-content">
          <p class="date">
            <span>{{ date.month }}</span> | <span>{{ date.day }}</span> | <span>{{ date.year }}</span>
          </p>
          <p class="location">{{ location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable no-undef -->
<script setup>
import { ref, computed, onMounted } from 'vue'
import { Cake, Gift, Info } from 'lucide-vue-next'

// Props
const props = defineProps({
  frontImage: String,
  frontText: String,
  frontIcon: String,
  date: {
    type: Object,
    default: () => ({ month: '', day: '', year: '' })
  },
  location: {
    type: String,
    default: ''
  }
})


// Íconos disponibles
const iconMap = {
  cake: Cake,
  gift: Gift,
  info: Info
}

const FrontIconComponent = computed(() => iconMap[props.frontIcon] || Info)
const isFlipped = ref(false)

const handleMouseEnter = () => {
  if (!isMobile.value) isFlipped.value = true
}

const handleMouseLeave = () => {
  if (!isMobile.value) isFlipped.value = false
}

const handleClick = () => {
  if (isMobile.value) isFlipped.value = !isFlipped.value
}

// Detectar mobile
const isMobile = ref(false)
onMounted(() => {
  isMobile.value = /Mobi|Android/i.test(navigator.userAgent)
})
</script>

<style scoped>
.card {
  width: 320px;
  height: 240px; /* Proporción 4:3 */
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; /* Asegura que padding/border no rompan proporciones */
  border: 1px solid #71937b; /* <-- borde fino negro agregado */
}

.card-front {
  background-size: cover;
  background-position: center;
  color: white;
  flex-direction: column;
}

.front-content {
  text-align: center;
  z-index: 1;
}

.icon {
  color: white;
}

.front-text {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
}

.card-back {
  background-color: white;
  transform: rotateY(180deg);
  padding: 0; /* Quitamos el padding que deformaba el tamaño */
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
}

.back-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.9;
  pointer-events: none;
}

.back-content {
  position: relative;
  z-index: 1;
  color: black;
  font-family: serif;
  padding: 1rem; /* Si querés espacio interno sin deformar el tamaño */
}

.date {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.location {
  font-size: 1rem;
  font-style: italic;
}
</style>
