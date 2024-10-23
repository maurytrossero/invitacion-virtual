<template>
    <div class="songs-list">
      <h2 class="title">Listado de Canciones</h2>
      <ul class="song-items">
        <li v-for="cancion in canciones" :key="cancion.id" class="song-item">
          <div class="song-info">
            <span class="song-name">{{ cancion.nombre }}</span>
            <span class="song-artist"> - {{ cancion.interprete }}</span>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { getCanciones } from '@/services/firestoreService';
  
  interface Cancion {
    id?: string;
    nombre: string;
    interprete: string;
  }
  
  export default defineComponent({
    setup() {
      const canciones = ref<Cancion[]>([]);
  
      const loadCanciones = async () => {
        try {
          canciones.value = await getCanciones();
        } catch (error) {
          console.error("Error al cargar las canciones:", error);
        }
      };
  
      onMounted(() => {
        loadCanciones();
      });
  
      return { canciones };
    }
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lora&display=swap');
  
  .songs-list {
    font-family: 'Lora', serif;
    background-color: #f0eae5;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100vh; /* Ocupa toda la altura de la pantalla */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Alineado a la parte superior */
    align-items: center;
    box-sizing: border-box;
    margin: 0;
  }
  
  .title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5em;
    color: #b98b4e;
    margin-bottom: 20px;
  }
  
  .song-items {
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 600px;
    margin-top: 0;
    overflow-y: auto; /* Permite scroll si hay muchas canciones */
  }
  
  .song-item {
    padding: 15px;
    margin: 10px 0;
    background-color: #fff;
    border-radius: 5px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .song-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .song-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .song-name {
    font-weight: bold;
    color: #b98b4e;
  }
  
  .song-artist {
    color: #555;
  }
  
  /* Estilos Responsivos */
  @media (max-width: 768px) {
    .songs-list {
      padding: 10px;
      height: 100vh; /* Asegura que ocupe toda la pantalla */
      justify-content: flex-start; /* Alineado en la parte superior */
      align-items: center;
    }
  
    .title {
      font-size: 2em;
    }
  
    .song-item {
      padding: 10px;
    }
  
    .song-items {
      max-width: 100%; /* Asegura que ocupe todo el ancho de la pantalla */
    }
  }
  </style>
  