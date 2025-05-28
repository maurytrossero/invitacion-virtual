<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">Agregar Canción</h2>

      <input 
        type="text" 
        v-model="name" 
        placeholder="Tu Nombre" 
        class="modal-input"
      />
      <p v-if="errors.name" class="error-message">{{ errors.name }}</p>

      <input 
        type="text" 
        v-model="songTitle" 
        placeholder="Título de la Canción" 
        class="modal-input"
      />
      <p v-if="errors.songTitle" class="error-message">{{ errors.songTitle }}</p>

      <input 
        type="text" 
        v-model="artist" 
        placeholder="Artista" 
        class="modal-input"
      />
      <p v-if="errors.artist" class="error-message">{{ errors.artist }}</p>

      <div class="modal-buttons">
        <button @click="saveSong" class="boton confirmar">Guardar</button>
        <button @click="closeModal" class="boton cancelar">Cancelar</button>
      </div>

      <transition name="fade">
        <div v-if="alertMessage" class="alert-box">{{ alertMessage }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default {
  name: "MusicModal",
  props: ["show"],
  data() {
    return {
      showModal: this.show,
      name: "",
      songTitle: "",
      artist: "",
      alertMessage: "",
      errors: {}
    };
  },
  watch: {
    show(newVal) {
      this.showModal = newVal;
    }
  },
  methods: {
    async saveSong() {
      this.errors = {};

      if (!this.name.trim()) this.errors.name = "Ingresa tu nombre.";
      if (!this.songTitle.trim()) this.errors.songTitle = "Ingresa el título.";
      if (!this.artist.trim()) this.errors.artist = "Ingresa el artista.";

      if (Object.keys(this.errors).length > 0) return;

      try {
        await addDoc(collection(db, "songs"), {
          name: this.name,
          songTitle: this.songTitle,
          artist: this.artist,
          createdAt: new Date()
        });

        this.showAlert("Canción guardada exitosamente.");
        setTimeout(() => {
          this.resetForm();
          this.$emit("close");
        }, 2000);
      } catch (error) {
        console.error("Error al guardar la canción:", error);
        this.showAlert("Hubo un error al guardar la canción.");
      }
    },
    showAlert(message) {
      this.alertMessage = message;
      setTimeout(() => {
        this.alertMessage = "";
      }, 3000);
    },
    closeModal() {
      this.$emit("close");
    },
    resetForm() {
      this.name = "";
      this.songTitle = "";
      this.artist = "";
      this.errors = {};
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Bahnschrift';
  src: url('@/assets/fonts/Bahnschrift.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.modal-content {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  font-family: 'Bahnschrift', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.modal-title {
  color: #333;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.modal-input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 9999px;
  border: none;
  text-align: center;
  font-family: inherit;
  font-size: 0.95rem;
  background-color: #f0f0f0;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: -0.5rem;
}

.modal-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.boton {
  font-family: 'Bahnschrift', sans-serif;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: 1px solid white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s ease;
  min-width: 120px;
  white-space: nowrap;
}

.confirmar {
  background-color: rgba(255, 255, 255, 0.4);
  color: #000;
  font-weight: bold;
  border: 1px solid #000;
}

.cancelar {
  background-color: rgba(255, 255, 255, 0.15);
  color: #000;
}

.boton:hover {
  transform: scale(1.05);
  background-color: white;
  color: black;
}

.alert-box {
  background-color: #c9a227;
  color: white;
  padding: 0.75rem;
  border-radius: 9999px;
  font-size: 0.9rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
