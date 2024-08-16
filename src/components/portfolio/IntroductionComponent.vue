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
            Mi objetivo es proporcionar imágenes y videos de alta calidad que cuenten historias y documenten tus momentos más importantes con un toque profesional y creativo.
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
  padding: 0; /* Eliminamos padding aquí */
  margin: 0; /* Eliminamos márgenes */
  min-height: 100vh; /* Aseguramos que ocupe al menos toda la altura de la pantalla */
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  position: relative;
  background: url('') no-repeat center center;
  background-size: cover;
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
  min-height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la pantalla */
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #00f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  width: 90%; /* Mantén el ancho responsivo */
  box-sizing: border-box;
  z-index: 2;
}

.title {
  font-size: 3rem;
  color: #00f;
  margin: 0;
}

.subtitle {
  font-size: 1.5rem;
  margin: 10px 0 30px;
  color: #ccc;
}

.description {
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

.section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.8rem;
  color: #00f;
  margin-bottom: 10px;
}

p {
  color: #ddd;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
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

@media (max-width: 1024px) {
  .overlay {
    padding: 30px;
  }

  .title {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .hero-image {
    min-height: 100vh; /* Mantiene la altura mínima en pantallas pequeñas */
  }

  .overlay {
    padding: 20px;
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

  .closing {
    font-size: 1.1rem;
  }
}
</style>
