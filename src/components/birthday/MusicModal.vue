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
        <button @click="saveSong" class="save-button">Guardar</button>
        <button @click="closeModal" class="cancel-button">Cancelar</button>
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
      showModal: this.show, // Sincronizamos con la prop
      name: "",
      songTitle: "",
      artist: "",
      alertMessage: "",
      errors: {} // Almacena los errores de validación
    };
  },
  watch: {
    show(newVal) {
      this.showModal = newVal;
    }
  },
  methods: {
    async saveSong() {
      this.errors = {}; // Reiniciar errores

      if (!this.name.trim()) this.errors.name = "Ingresa tu nombre.";
      if (!this.songTitle.trim()) this.errors.songTitle = "Ingresa el título.";
      if (!this.artist.trim()) this.errors.artist = "Ingresa el artista.";

      if (Object.keys(this.errors).length > 0) return; // Si hay errores, no continuar

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
          this.$emit("close"); // Notifica al padre que se cerró el modal
        }, 2000); // Espera 2 segundos para que el usuario vea la alerta
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
      this.$emit("close"); // Notificar al padre
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
/* Estilos del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
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

.modal-title {
  font-size: 1.2rem;
  color: #c9a227;
  margin-bottom: 10px;
}

.modal-input {
  width: 100%;
  max-width: 320px;
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid #c9a227;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.save-button {
  background-color: #c9a227;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9rem;
}

.save-button:hover {
  background-color: #b1911f;
}

.cancel-button {
  background-color: #ddd;
  color: #333;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.cancel-button:hover {
  background-color: #bbb;
}

/* Mensaje de alerta */
.alert-box {
  background-color: #c9a227;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
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
