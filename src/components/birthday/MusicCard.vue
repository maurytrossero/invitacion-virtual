<template>
    <div class="card-container">
      <div class="card" @click="flipCard" :class="{ flipped: isFlipped }">
        <!-- Parte frontal de la tarjeta -->
        <div class="card-side card-front">
          <img
            src="https://media.istockphoto.com/id/1324006497/es/foto/mezclador-de-dj-controlador-de-m%C3%BAsica-en-un-club-nocturno-en-una-fiesta.jpg?s=612x612&w=0&k=20&c=xeywNcuAniIqgucCVeJwaCgq1YJ-JbARFo_D1qvr-kU="
            alt="Imagen del salón"
            class="card-image"
          />
          <div class="card-overlay">
            <i class="fas fa-record-vinyl location-icon"></i>
            <p class="card-text">Música</p>
          </div>
        </div>
  
        <!-- Parte trasera de la tarjeta -->
        <div class="card-side card-back">
          <div class="card-back-content">
            <h3>Tu música favorita</h3>
            <p>Completa el siguiente formulario para enviarnos tu música sugerida</p>
          </div>
          <div class="map-container">
            <!-- Cuando se hace clic aquí, se abre directamente el modal -->
            <a
              href="#"
              @click.prevent="openModal"
              class="map-link"
            >
              Sugerir Canción
            </a>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Modal de sugerencia de canción -->
    <MusicModal v-if="isModalVisible" @close="closeModal" />
  </template>
  
  <script>
    import MusicModal from '@/components/birthday/MusicModal.vue'; // Ajusta según sea necesario
  
    export default {
      name: "EventCard",
      components: {
        MusicModal,
      },
      data() {
        return {
          isFlipped: false,
          isModalVisible: false, // Controla la visibilidad del modal
        };
      },
      methods: {
        flipCard() {
          this.isFlipped = !this.isFlipped;
        },
        openModal() {
          this.isModalVisible = true; // Muestra el modal cuando se hace clic en "Sugerir Canción"
        },
        closeModal() {
          this.isModalVisible = false; // Cierra el modal
        },
      },
    };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Muli:wght@200&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
  
  .card-container {
    width: 100%;
    max-width: 320px;
    margin: 20px auto;
    perspective: 1500px;
  }
  
  .card {
    width: 100%;
    height: 220px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
  .card.flipped {
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
  }
  
  .location-icon {
    font-size: 2rem;
    margin-bottom: 10px;
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
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    max-width: 100%;
  }
  
  .modal-content input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .modal-content button {
    padding: 10px 15px;
    background-color: #b8860b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .modal-content button:hover {
    background-color: #9a7516;
  }
  
  /* Ajustes para dispositivos móviles */
  @media (max-width: 768px) {
    .card-container {
      max-width: 90%;
      margin: 10px auto;
    }
  
    .card {
      height: 250px;
    }
  }
  </style>
  