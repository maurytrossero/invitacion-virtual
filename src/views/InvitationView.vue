<template>
  <div class="home">
    <div ref="introduccionComponenteRef"><IntroduccionComponente /></div>
    <div ref="cuentaRegresivaRef"><CuentaRegresiva /></div>
    <div ref="invitacionBodaRef"><InvitacionBoda /></div>
    <div ref="ubicacionEventoRef"><UbicacionEvento /></div>
    <div ref="gestionFiestaRef"><GestionFiesta /></div>
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
  introduccionComponenteRef,
  cuentaRegresivaRef,
  invitacionBodaRef,
  ubicacionEventoRef,
  gestionFiestaRef,
  fotosEventoRef
];

let currentIndex = ref(0);
const isPlaying = ref(false);
const showFooterMusic = ref(false);

const scroll = (direction: 'up' | 'down') => {
  if (refs.length === 0) return;

  // Ajustar el índice actual según la dirección del desplazamiento
  if (direction === 'up') {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  } else if (direction === 'down') {
    if (currentIndex.value < refs.length - 1) {
      currentIndex.value++;
    }
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

  if (showFooterMusic.value && !isPlaying.value) {
    isPlaying.value = true;
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  position: relative;
  min-height: 200vh;
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
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-btn.down {
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.music-btn {
  position: fixed;
  bottom: 50px;
  right: 20px;
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
    bottom: 110px;
  }

  .scroll-btn.down {
    bottom: 70px;
  }

  .music-btn {
    width: 40px;
    height: 40px;
    bottom: 40px;
  }
}
</style>
