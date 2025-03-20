<template>
    <div class="event-location-container">
      <div class="event-text">
        <p class="event-description">
          Los esperamos para celebrar juntos el día <strong>Sábado 26 de Abril de 2025</strong>
        </p>
      </div>
    
      <!-- Ícono de ubicación -->
      <div class="location-icon">
        <i class="fas fa-map-marker-alt"></i>
      </div>
    
      <!-- Texto ubicación -->
      <div class="location-text">
        <p>Ubicación</p>
      </div>
    
      <!-- Tarjeta de detalles -->
      <div class="event-card-container">
        <EventCard />
      </div>
    </div>
  </template>
  
  <script>
  import EventCard from '@/components/birthday/EventCard.vue';  // Asegúrate de que esta ruta sea correcta
  
  export default {
    name: 'EventLocation',
    components: {
      EventCard,  // Aquí registras el componente de forma local
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Spectral+SC:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
  
  .event-location-container {
    background-color: #f8f8f8; /* Fondo clarito */
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Cambié a flex-start para evitar que el contenido esté completamente centrado */
    gap: 20px;
    overflow: hidden;
  }
  
  .event-text {
    text-align: center;
    font-family: 'Playball', cursive; /* Usar Playball para la frase */
    font-size: 1.5rem; /* Mantengo el tamaño de la fuente */
    color: #333;
    margin-top: 60px; /* Ajusté el margen superior para que el texto quede más centrado */
    word-wrap: break-word;
    width: 100%; /* Hacer que el texto se ajuste dentro del contenedor */
    max-width: 90%; /* Ajusté el ancho máximo para evitar desbordes */
  }
  
  .location-icon {
    font-size: 2.5rem; /* Aumenté el tamaño del ícono */
    color: #b8860b; /* Color dorado oscuro (Goldenrod) */
    margin-top: 15px; /* Bajé el ícono un poco */
  }
  
  .location-text {
    font-family: 'Spectral SC', serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #b8860b; /* Color dorado oscuro */
    text-align: center;
    letter-spacing: -0.4px;
    line-height: 25px;
    margin-top: 10px; /* Bajé el texto de ubicación */
    padding: 0;
    width: 100%; /* Aseguré que el texto se ajuste dentro del contenedor */
    max-width: 320px; /* Limité el ancho máximo para que no se salga */
    text-rendering: optimizelegibility;
  }
  
  .event-card-container {
    width: 100%; /* Asegura que la tarjeta ocupe todo el ancho disponible */
    max-width: 320px; /* Limita el tamaño máximo para no desbordar en pantallas pequeñas */
    margin-top: 20px; /* Asegura que haya un poco de espacio entre el texto y la tarjeta */
    display: flex;
    justify-content: center;
    position: relative;
    background-color: white; /* Aseguramos que tenga un fondo blanco */
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Agregamos sombra para asegurar que la tarjeta se vea */
    padding: 20px; /* Asegura que la tarjeta no se vea aplastada */
    z-index: 1; /* Aseguramos que la tarjeta esté por encima de otros elementos */
  }
  
  @media (max-width: 1920px) {
    .event-location-container {
      height: 100vh;
    }
  }
  
  @media (max-width: 768px) {
    .event-text {
      font-size: 1.2rem;
      margin-top: 50px; /* Bajé el texto para móviles */
      max-width: 90%; /* Aseguré que el texto no se desborde en pantallas más pequeñas */
    }
    
    .location-icon {
      font-size: 2rem; /* Ajusté el tamaño del ícono */
      margin-top: 10px;
    }
  
    .location-text {
      font-size: 1.2rem;
      margin-top: 5px; /* Ajusté la distancia entre el ícono y el texto */
      max-width: 280px; /* Ajusté el ancho para móviles */
    }
  
    .event-card-container {
      max-width: 90%; /* Asegura que la tarjeta ocupe el 90% del ancho en pantallas móviles */
      margin-top: 15px; /* Ajusté el margen superior para móviles */
    }
  }
  
  @media (max-width: 768px) and (orientation: landscape) {
    .event-text {
      font-size: 1.2rem;
      margin-top: 30px; /* Ajusté el margen superior para una mejor distribución */
    }
  
    .location-icon {
      font-size: 2rem;
      margin-top: 10px;
    }
  
    .location-text {
      font-size: 1.1rem;
      max-width: 250px; /* Ajusté el ancho para una mejor visualización en paisaje */
    }
  
    .event-card-container {
      max-width: 80%; /* Limité el ancho de la tarjeta para una mejor distribución */
    }
  }
  </style>
  