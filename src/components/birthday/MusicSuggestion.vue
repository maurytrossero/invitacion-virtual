<template>
    <div class="event-location-container">
      <div class="event-text">
        <p class="event-description">
          Para divertirnos al maximo envianos tu música favorita <strong>que no pueda faltar en la fiesta</strong>
        </p>
      </div>
  
    <!-- Ícono de pago -->
    <div class="location-icon">
        <i class="fas fa-music location-icon"></i>
    </div>

  
      <!-- Texto -->
      <div class="location-text">
        <p>Sugerinos tu música</p>
      </div>
  
      <!-- Tarjeta de detalles -->
      <div class="event-card-container">
        <MusicCard />
      </div>
    </div>
  </template>
  
  <script>
  import MusicCard from '@/components/birthday/MusicCard.vue';
  
  export default {
    name: 'EventLocation',
    components: {
      MusicCard, // Registro local del componente
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Spectral+SC:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
  
  /* Contenedor principal */
  .event-location-container {
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    min-height: 100vh; /* Ocupa al menos la pantalla completa */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Centra los elementos verticalmente */
    gap: 20px;
    overflow-x: hidden; /* Evita scroll horizontal */
    box-sizing: border-box;
  }
  
  /* Texto principal */
  .event-text {
    text-align: center;
    font-family: 'Playball', cursive;
    font-size: 1.5rem;
    color: #333;
    margin: 0;
    width: 100%;
    max-width: 90%;
  }
  
  /* Ícono de ubicación */
  .location-icon {
    font-size: 2.5rem;
    color: #b8860b;
    margin: 10px 0;
  }
  
  /* Texto de ubicación */
  .location-text {
    font-family: 'Spectral SC', serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #b8860b;
    text-align: center;
    letter-spacing: -0.4px;
    line-height: 25px;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 320px;
  }
  
  /* Contenedor de la tarjeta */
  .event-card-container {
    width: 100%;
    max-width: 320px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: transparent; /* Eliminado el fondo */
    border-radius: 8px;
    box-shadow: none; /* Eliminada la sombra */
    padding: 20px;
    z-index: 1;
  }
  
  /* Ajustes para móviles */
  @media (max-width: 768px) {
    .event-text {
      font-size: 1.2rem;
    }
    .location-icon {
      font-size: 2rem;
    }
    .location-text {
      font-size: 1.2rem;
      max-width: 280px;
    }
    .event-card-container {
      max-width: 90%;
      margin-top: 15px;
    }
  }
  
  /* Ajustes para pantallas alargadas y orientación horizontal */
  @media (max-width: 768px) and (orientation: landscape) {
    .event-location-container {
      padding: 10px;
      justify-content: center;
    }
    .event-text {
      font-size: 1.2rem;
    }
    .location-icon {
      font-size: 2rem;
    }
    .location-text {
      font-size: 1.1rem;
      max-width: 250px;
    }
    .event-card-container {
      max-width: 80%;
      margin-top: 10px;
    }
  }
  </style>