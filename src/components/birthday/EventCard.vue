<template>
  <div class="hover-wrapper">
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
            <FontAwesomeIcon icon="birthday-cake" class="location-icon" />
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
              href="https://maps.app.goo.gl/QiHJuu1amZ4zVtGs5"
              target="_blank"
              class="map-link"
            >
              Ver mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Añadir el icono a la librería
library.add(faBirthdayCake);

export default {
  name: "EventCard",
  components: {
    FontAwesomeIcon,
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

/* Contenedor con tamaño fijo de la tarjeta */
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
  transition: transform 0.6s ease-in-out; /* Animación suave */
}

/* Se activa el giro de la tarjeta cuando se hace hover sobre el wrapper */
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

/* Ajustes para dispositivos móviles */
@media (max-width: 768px) {
  .card-container {
    width: 90%;
    height: auto;
    margin: 10px auto;
  }
}
</style>
