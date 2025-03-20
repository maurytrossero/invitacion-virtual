<template>
    <div>
      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h2 class="modal-title">Agregar Canción</h2>
          <input type="text" v-model="name" placeholder="Tu Nombre" class="modal-input" />
          <input type="text" v-model="songTitle" placeholder="Título de la Canción" class="modal-input" />
          <input type="text" v-model="artist" placeholder="Artista" class="modal-input" />
          <div class="modal-buttons">
            <button @click="saveSong" class="save-button">Guardar</button>
            <button @click="showModal = false" class="cancel-button">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { db } from '@/firebase';
  import { collection, addDoc } from 'firebase/firestore';
  
  export default {
    name: "SongModal",
    data() {
      return {
        showModal: false,
        name: '',
        songTitle: '',
        artist: ''
      };
    },
    mounted() {
      this.showModal = true; 
    },
    methods: {
      async saveSong() {
        if (!this.name.trim() || !this.songTitle.trim() || !this.artist.trim()) {
          alert("Por favor, completa todos los campos.");
          return;
        }
        try {
          await addDoc(collection(db, 'songs'), {
            name: this.name,
            songTitle: this.songTitle,
            artist: this.artist,
            createdAt: new Date()
          });
          this.showModal = false;
          this.name = '';
          this.songTitle = '';
          this.artist = '';
          alert("Canción guardada exitosamente.");
        } catch (error) {
          console.error("Error guardando la canción: ", error);
          alert("Hubo un error al guardar la canción.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Fondo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 90%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Título más pequeño */
  .modal-title {
    font-size: 1.2rem;
    color: #C9A227;
    font-family: "TuFuente", sans-serif;
    margin-bottom: 10px;
  }
  
  /* Campos de entrada más compactos */
  .modal-input {
    width: 100%;
    max-width: 320px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 5px;
    border: 1px solid #C9A227;
    background: #fff;
    color: #333;
    font-size: 0.9rem;
    font-family: "TuFuente", sans-serif;
  }
  
  /* Botones más pequeños y refinados */
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
  
  .save-button, .cancel-button {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 0.9rem;
    font-family: "TuFuente", sans-serif;
    transition: 0.3s ease;
  }
  
  .save-button {
    background-color: #C9A227;
    color: #fff;
  }
  
  .save-button:hover {
    background-color: #b1911f;
  }
  
  .cancel-button {
    background-color: #ddd;
    color: #333;
  }
  
  .cancel-button:hover {
    background-color: #bbb;
  }
  </style>
  