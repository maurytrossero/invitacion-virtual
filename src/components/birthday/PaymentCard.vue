<template>
    <div class="card-container">
      <div class="card" @click="flipCard" :class="{ flipped: isFlipped }">
        <!-- Parte frontal de la tarjeta -->
        <div class="card-side card-front">
          <img
            src="https://media.istockphoto.com/id/694177316/es/foto/barbacoa-fiesta.jpg?s=612x612&w=0&k=20&c=tMzwj15vBSr1g4HgRJDxURcHb8U_RW8XCoSFA_UQ27o="
            alt="Imagen del salón"
            class="card-image"
          />
          <div class="card-overlay">
            <i class="fas fa-utensils location-icon"></i>
            <p class="card-text">Precio de Tarjeta</p>
          </div>
        </div>
  
        <!-- Parte trasera de la tarjeta -->
        <div class="card-side card-back">
          <div class="card-back-content">
            <h3>Mayores</h3>
            <p>$30000</p>

            <h3>Menores</h3>
            <p>$ 25000</p>
          </div>
          <div class="map-container">
            <a
              href="https://maps.app.goo.gl/QiHJuu1amZ4zVtGs5"
              target="_blank"
              class="map-link"
            >
              Alias
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
  
  /* Se asegura que el contenido trasero esté bien distribuido */
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
      max-width: 90%;
      margin: 10px auto;
    }
  
    .card {
      height: 250px;
    }
  }
  </style>
