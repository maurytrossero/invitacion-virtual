<template>
    <div class="fiesta">
      <h1>Una gran fiesta junto a vos</h1>
      <p>Compartí tus fotos y videos de este hermoso día con el hashtag</p>
      <h2>#BodaEmaYJorge</h2>
      <div class="carrusel">
        <div class="carrusel-contenedor">
          <div class="carrusel-item" v-for="(imagen, index) in imagenes" :key="index">
            <img :src="imagen" alt="Foto de la boda" />
          </div>
        </div>
        <button @click="anterior" class="carrusel-boton carrusel-boton-anterior">Anterior</button>
        <button @click="siguiente" class="carrusel-boton carrusel-boton-siguiente">Siguiente</button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const imagenes = ref([
    'https://via.placeholder.com/300x200?text=Imagen+1',
    'https://via.placeholder.com/300x200?text=Imagen+2',
    'https://via.placeholder.com/300x200?text=Imagen+3'
  ]);
  
  const carruselIndex = ref(0);
  
  const anterior = () => {
    carruselIndex.value = (carruselIndex.value - 1 + imagenes.value.length) % imagenes.value.length;
  };
  
  const siguiente = () => {
    carruselIndex.value = (carruselIndex.value + 1) % imagenes.value.length;
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lora&display=swap');
  
  .fiesta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #f7f7f7;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  
  .fiesta h1, .fiesta h2 {
    font-family: 'Cormorant Garamond', serif;
    color: #b98b4e; /* Color dorado */
  }
  
  .fiesta p {
    font-family: 'Lora', serif;
    color: #333; /* Color gris oscuro */
  }
  
  .carrusel {
    position: relative;
    width: 80%;
    max-width: 600px;
    overflow: hidden;
    margin-top: 20px;
  }
  
  .carrusel-contenedor {
    display: flex;
    transition: transform 0.5s ease;
    transform: translateX(calc(-100% * var(--carrusel-index)));
  }
  
  .carrusel-item {
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .carrusel-item img {
    width: 100%;
    border-radius: 10px;
  }
  
  .carrusel-boton {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 1.5em;
    border-radius: 5px;
  }
  
  .carrusel-boton-anterior {
    left: 10px;
  }
  
  .carrusel-boton-siguiente {
    right: 10px;
  }
  
  .carrusel-boton:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  @media (max-width: 768px) {
    .fiesta h1 {
      font-size: 1.5em;
    }
  
    .fiesta h2 {
      font-size: 1.2em;
    }
  
    .carrusel {
      width: 100%;
    }
  }
  </style>
  