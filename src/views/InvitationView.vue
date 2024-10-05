<template>
  <div class="home">
    <div ref="introduccionComponenteRef"><IntroduccionComponente /></div>
    <div ref="cuentaRegresivaRef"><CuentaRegresiva /></div>
    <div ref="invitacionBodaRef"><InvitacionBoda /></div>
    <div ref="ubicacionEventoRef"><UbicacionEvento /></div>
    <div ref="gestionFiestaRef"><GestionFiesta /></div>
    <div ref="fotosEventoRef"><FotosEvento /></div>
    <FooterMusic v-if="showFooterMusic" />

    <button class="scroll-btn up" @click="scroll('up')">▲</button>
    <button class="scroll-btn down" @click="scroll('down')">▼</button>
    <button class="music-btn" @click="toggleFooterMusic">
      <font-awesome-icon :icon="showFooterMusic ? 'volume-up' : 'volume-mute'" />
    </button>

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import InvitacionBoda from '@/components/InvitacionBoda.vue';
import IntroduccionComponente from '@/components/IntroduccionComponente.vue';
import CuentaRegresiva from '@/components/CuentaRegresiva.vue';
import UbicacionEvento from '@/components/UbicacionEvento.vue';
import GestionFiesta from '@/components/GestionFiesta.vue';
import FotosEvento from '@/components/FotosEvento.vue';
import FooterMusic from '@/components/FooterMusic.vue';

const cuentaRegresivaRef = ref<HTMLElement | null>(null);
const invitacionBodaRef = ref<HTMLElement | null>(null);
const ubicacionEventoRef = ref<HTMLElement | null>(null);
const gestionFiestaRef = ref<HTMLElement | null>(null);
const fotosEventoRef = ref<HTMLElement | null>(null);
const introduccionComponenteRef = ref<HTMLElement | null>(null);
const ubicacionMesasRef = ref<HTMLElement | null>(null);

const refs = [
  cuentaRegresivaRef,
  invitacionBodaRef,
  ubicacionEventoRef,
  gestionFiestaRef,
  fotosEventoRef,
  introduccionComponenteRef,
  ubicacionMesasRef
];

let currentIndex = ref(0);
const isPlaying = ref(false); // Estado de reproducción
const showFooterMusic = ref(false);

const scroll = (direction: 'up' | 'down') => {
  if (refs.length === 0) return;

  if (direction === 'up') {
    currentIndex.value = (currentIndex.value - 1 + refs.length) % refs.length;
  } else if (direction === 'down') {
    currentIndex.value = (currentIndex.value + 1) % refs.length;
  }

  const targetRef = refs[currentIndex.value];
  if (targetRef && targetRef.value) {
    window.scrollTo({
      top: targetRef.value.offsetTop,
      behavior: 'smooth'
    });
  }
};

const toggleFooterMusic = () => {
  showFooterMusic.value = !showFooterMusic.value;

  // Si se muestra el footer, puedes iniciar la música
  if (showFooterMusic.value && !isPlaying.value) {
    isPlaying.value = true; // Inicia la reproducción
  }
};
</script>


<style scoped>
.home {
  text-align: center;
  padding: 20px;
  position: relative;
  min-height: 200vh; /* Asegura que haya suficiente contenido para desplazar */
}

.scroll-btn {
  position: fixed;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
}

.scroll-btn.up {
  bottom: 150px; /* Aumenta la posición para que esté más arriba */
  left: 50%;
  transform: translateX(-50%);
}

.scroll-btn.down {
  bottom: 100px; /* Ajusta la posición del botón hacia abajo */
  left: 50%;
  transform: translateX(-50%);
}

.music-btn {
  position: fixed;
  bottom: 50px; /* Ajusta la posición del botón de música */
  right: 20px; /* Ajusta la posición del botón de música */
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  z-index: 1000;
}

/* Responsive styling */
@media (max-width: 768px) {
  .scroll-btn {
    width: 35px;
    height: 35px;
    font-size: 1.2em;
  }

  .scroll-btn.up {
    bottom: 110px; /* Ajusta la posición en vista móvil */
  }

  .scroll-btn.down {
    bottom: 70px; /* Ajusta la posición en vista móvil */
  }

  .music-btn {
    width: 40px;
    height: 40px;
    bottom: 40px; /* Ajusta la posición en vista móvil */
  }
}
</style>
