<template>
    <div class="card-container">
      <div class="card" @click="flipCard" :class="{ flipped: isFlipped }">
        <!-- Parte frontal de la tarjeta -->
        <div class="card-side card-front">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJV9VrJEALJlT1wavS0P9rQOokq5FqZy_iTQ&s"
            alt="Imagen del salón"
            class="card-image"
          />
          <div class="card-overlay">
            <i class="fas fa-utensils location-icon"></i>
            <p class="card-text">Salón de Fiestas</p>
          </div>
        </div>
    
        <!-- Parte trasera de la tarjeta -->
        <div class="card-side card-back">
          <div class="card-back-content">
            <h3>La Biela</h3>
            <p>21:00 hs</p>
            <p>Acceso Norte Ruta 1, Freyre, Córdoba</p>
          </div>
          <div class="map-container">
            <a
              href="https://www.google.com/maps?q=Acceso+Norte+Ruta+1,+Freyre,+Córdoba"
              target="_blank"
              class="map-link"
            >
              Ver mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  export default {
    name: "EventCard",
    data() {
      return {
        isFlipped: false,
      };
    },
    methods: {
      flipCard() {
        this.isFlipped = !this.isFlipped;
      },
    },
  };
  </script>
    
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Muli:wght@200&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
  
  /* El contenedor ahora es un bloque normal, sin flex centrado verticalmente */
  .card-container {
    width: 100%;
    max-width: 320px; /* Limita el ancho para mantener el diseño */
    margin: 20px auto; /* Centrado horizontal y con margen superior/inferior */
  }
  
  .card {
    width: 100%;
    height: 220px;
    perspective: 1500px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
  .card.flipped {
    transform: rotateY(180deg);
  }
  
  .card-side {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Muli", sans-serif;
  }
  
  .card-back-content h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .card-back-content p {
    font-size: 0.9rem;
  }
  
  .map-container {
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
      max-width: 90%; /* Permite que se ajuste al ancho de la pantalla */
      margin: 10px auto; /* Menos margen si es necesario */
    }
    
    .card {
      height: 250px;
    }
  }
  </style>
  