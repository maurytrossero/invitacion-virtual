<template>
  <div class="hover-wrapper">
    <div class="card-container">
      <div class="card">
        <div class="card-side card-front">
          <img
            src="https://media.istockphoto.com/id/1324006497/es/foto/mezclador-de-dj-controlador-de-m%C3%BAsica-en-un-club-nocturno-en-una-fiesta.jpg?s=612x612&w=0&k=20&c=xeywNcuAniIqgucCVeJwaCgq1YJ-JbARFo_D1qvr-kU="
            alt="Imagen del salón"
            class="card-image"
          />
          <div class="card-overlay">
            <font-awesome-icon icon="record-vinyl" class="vinyl-icon" />
            <p class="card-text">Música</p>
          </div>
        </div>

        <div class="card-side card-back">
          <div class="card-back-content">
            <h3>Tu música favorita</h3>
            <p>
              Completa el siguiente formulario para enviarnos tu música
              sugerida
            </p>
          </div>
          <div class="map-container">
            <a href="#" @click.prevent="openModal" class="map-link">
              Sugerir Canción
            </a>
          </div>
        </div>
      </div>
    </div>

    <MusicModal :show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import MusicModal from "@/components/birthday/MusicModal.vue";

// Agregar el icono a la biblioteca de FontAwesome
library.add(faRecordVinyl);

export default {
  name: "EventCard",
  components: {
    MusicModal,
    FontAwesomeIcon,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Muli:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

/* Wrapper externo que amplía el área sensible al hover sin modificar el tamaño de la tarjeta */
.hover-wrapper {
  display: inline-block;
  padding: 20px; /* Área extra para capturar el hover */
}

.card-container {
  width: 320px;
  height: 220px;
  margin: 20px auto;
  perspective: 1500px;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
}

/* Al hacer hover sobre el wrapper se activa el giro de la tarjeta */
.hover-wrapper:hover .card {
  transform: rotateY(180deg);
}

.card-side {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-front {
  background-color: #f8f8f8;
  overflow: hidden;
  border-radius: 15px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}

.card-text {
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 8px;
}

/* Estilo para el icono del disco vinilo */
.vinyl-icon {
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.card-back {
  background-color: #b8860b;
  color: white;
  transform: rotateY(180deg);
  padding: 15px;
  font-family: "Muli", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-back-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
}

.card-back-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.card-back-content p {
  font-size: 0.9rem;
  margin: 3px 0;
}

.map-container {
  text-align: center;
  margin-bottom: 10px;
}

.map-link {
  font-size: 1rem;
  color: #ffffff;
  text-decoration: underline;
  font-weight: 500;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 768px) {
  .card-container {
    width: 90%;
    height: auto;
    margin: 10px auto;
  }
}
</style>
