<template>
  <div class="home">
    <CuentaRegresiva />
    <InvitacionBoda />
    <UbicacionEvento />
    <GestionFiesta />
    <FotosEvento />

    <button class="scroll-btn up" @click="scroll('up')">▲</button>
    <button class="scroll-btn down" @click="scroll('down')">▼</button>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import InvitacionBoda from '@/components/InvitacionBoda.vue'  
import CuentaRegresiva from '@/components/CuentaRegresiva.vue'  
import UbicacionEvento from '@/components/UbicacionEvento.vue'
import GestionFiesta from '@/components/GestionFiesta.vue'
import FotosEvento from '@/components/FotosEvento.vue'

const scroll = (direction: 'up' | 'down') => {
  const offset = direction === 'up' ? -window.innerHeight : window.innerHeight;
  window.scrollBy({ top: offset, behavior: 'smooth' });
}
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
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-btn.down {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

/* Responsive styling */
@media (max-width: 768px) {
  .scroll-btn {
    width: 35px;
    height: 35px;
    font-size: 1.2em;
  }

  .scroll-btn.up {
    bottom: 50px;
  }

  .scroll-btn.down {
    bottom: 5px;
  }
}
</style>
