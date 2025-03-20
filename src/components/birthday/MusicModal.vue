<template>
    <div>
      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h2>Agregar Canción</h2>
          <!-- Formulario para ingresar el nombre, título y artista -->
          <input type="text" v-model="name" placeholder="Tu Nombre" />
          <input type="text" v-model="songTitle" placeholder="Título de la Canción" />
          <input type="text" v-model="artist" placeholder="Artista" />
          <div class="modal-buttons">
            <button @click="saveSong">Guardar</button>
            <button @click="showModal = false">Cancelar</button>
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
        showModal: false,  // Modal inicialmente oculto
        name: '',
        songTitle: '',
        artist: ''
      };
    },
    mounted() {
      this.showModal = true;  // Activa el modal automáticamente cuando el componente se monta
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
  .add-song-button {
    display: none;  /* Ya no se necesita el botón, lo ocultamos */
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .modal-content input {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    max-width: 350px; /* Para asegurarse de que no se salga fuera */
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
  
  .modal-buttons button {
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .modal-buttons button:first-child {
    background-color: #28a745;
    color: white;
  }
  
  .modal-buttons button:last-child {
    background-color: #dc3545;
    color: white;
  }
  </style>
  