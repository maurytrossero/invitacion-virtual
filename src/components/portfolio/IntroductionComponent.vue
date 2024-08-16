<template>
  <div class="introduction">
    <div class="hero-image">
      <div class="overlay">
        <h1 class="title">Mauricio Trossero</h1>
        <h2 class="subtitle">Fotógrafo y Productor Audiovisual</h2>
        <div class="description">
          <div class="section">
            <h3 class="section-title">Eventos Sociales</h3>
            <p>Capturo momentos especiales en 15 años, bodas, graduaciones, y más.</p>
          </div>
          <div class="section">
            <h3 class="section-title">Fotografía de Productos</h3>
            <p>Realizo sesiones fotográficas para resaltar las características de tus productos.</p>
          </div>
          <div class="section">
            <h3 class="section-title">Videos Institucionales</h3>
            <p>Produzco contenido visual que comunica la esencia de tu institución o empresa.</p>
          </div>
          <div class="section">
            <h3 class="section-title">Fotografía y Videos Aéreos</h3>
            <p>Utilizo tecnología avanzada para capturar imágenes y videos desde perspectivas únicas.</p>
          </div>
          <p class="closing">
            Mi objetivo es proporcionar imágenes y videos de alta calidad que cuenten historias y documenten
            tus momentos más importantes con un toque profesional y creativo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.introduction {
  text-align: center;
  background-color: #1e1e1e;
  color: #fff;
  padding: 100px 20px; /* Espacio superior e inferior */
}

.hero-image {
  position: relative;
  background: url('') no-repeat center center;
  background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
  background-position: center center; /* Centra la imagen */
  height: 100vh; /* Ocupa toda la altura de la pantalla */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0; /* Eliminar márgenes */
  padding: 20px 0; /* Añadir padding superior e inferior */
  box-sizing: border-box; /* Incluye el padding en el tamaño total del elemento */
}

.overlay {
  background: rgba(0, 0, 0, 0.7); /* Mayor opacidad para el overlay */
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #00f; /* Borde elegante en azul eléctrico */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Sombra suave */
  max-width: 90%; /* Ajustar el ancho máximo para adaptarse a diferentes pantallas */
  margin: 0 auto; /* Centrar horizontalmente */
  box-sizing: border-box; /* Incluye el padding en el tamaño total del elemento */
}

.title {
  font-size: 3rem;
  color: #00f; /* Azul eléctrico */
  margin: 0;
}

.subtitle {
  font-size: 1.5rem;
  margin: 10px 0 30px;
  color: #ccc; /* Gris claro */
}

.description {
  margin: 0 auto;
  max-width: 800px;
  text-align: center; /* Cambiado a centrado */
  animation: fadeIn 1s ease-in-out;
}

.section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.8rem;
  color: #00f; /* Azul eléctrico */
  margin-bottom: 10px;
}

p {
  color: #ddd;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center; /* Cambiado a centrado */
}

.closing {
  margin-top: 30px;
  font-size: 1.2rem;
  text-align: center;
  font-style: italic;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-image {
    height: 60vh; /* Ajustar altura en dispositivos pequeños */
  }

  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
