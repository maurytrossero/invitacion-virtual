<template>
    <div class="card-container">
      <div class="card">
        <!-- Parte frontal de la tarjeta -->
        <div class="card-side card-front">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJV9VrJEALJlT1wavS0P9rQOokq5FqZy_iTQ&s"
            alt="Imagen del salón"
            class="card-image"
          />
          <div class="card-overlay">
            <i class="fas fa-utensils location-icon"></i>
            <p class="card-text">Salon de Fiestas</p>
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
    name: 'EventCard',
  };
  </script>
    
  <style scoped>
  /* Importar fuente Muli ExtraLight */
  @import url('https://fonts.googleapis.com/css2?family=Muli:wght@200&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .card {
    width: 320px;
    height: 220px;
    perspective: 1500px;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  
  .card:hover {
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
    overflow: hidden; /* Esto asegura que no se vea la sombra opaca */
    border-radius: 15px; /* Aseguramos que los bordes redondeados de la imagen se alineen */
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px; /* Asegura que la imagen tenga bordes redondeados */
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
  
  /* Aplicar fuente Playfair Display al texto "Salón de Fiestas" */
  .card-text {
    font-family: 'Playfair Display', serif; /* Usar Playfair Display */
    font-size: 1.3rem;
    font-weight: 500;
  }
  
  /* Estilo para el icono de restaurante */
  .location-icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  /* Estilo para la parte trasera de la tarjeta */
  .card-back {
    background-color: #b8860b;
    color: white;
    transform: rotateY(180deg);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Muli', sans-serif; /* Aplicar la fuente Muli ExtraLight */
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
  
  @media (max-width: 768px) {
    .card {
      width: 85%;
      height: 250px;
    }
  }
  </style>
  