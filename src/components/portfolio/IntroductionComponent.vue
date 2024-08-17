<template>
  <div class="introduction">
    <div class="hero-image">
      <div class="overlay">
        <h1 class="title">Mauricio Trossero</h1>
        <h2 class="subtitle">Fotógrafo y Productor Audiovisual</h2>
        <div class="description">
          <!-- Sección de Eventos Sociales -->
          <div class="section">
            <AccountGroupIcon class="section-icon"/>
            <h3 class="section-title">Eventos Sociales</h3>
            <p>Capturamos momentos especiales en 15 años, bodas, egresos, y más.</p>
          </div>
          <!-- Sección de Fotografía de Productos -->
          <div class="section">
            <CameraIcon class="section-icon"/>
            <h3 class="section-title">Fotografía de Productos</h3>
            <p>Realizamos sesiones fotográficas para resaltar las características de tus productos.</p>
          </div>
          <!-- Sección de Videos Institucionales -->
          <div class="section">
            <VideoCameraIcon class="section-icon"/>
            <h3 class="section-title">Videos Institucionales</h3>
            <p>Producimos contenido visual que comunica la esencia de tu institución o empresa.</p>
          </div>
          <!-- Sección de Fotografía y Videos Aéreos -->
          <div class="section">
            <DroneIcon class="section-icon"/>
            <h3 class="section-title">Fotografía y Videos Aéreos</h3>
            <p>Utilizamos tecnología avanzada para capturar imágenes y videos desde perspectivas únicas.</p>
          </div>
          
          <p class="closing">
            <span class="quote-start">“</span>
            Nos dedicamos a capturar los momentos que realmente importan. Creemos en el poder de las imágenes y videos para contar historias profundas y reflejar emociones auténticas. 
            Celebramos los hitos más significativos de tu vida con un enfoque profesional y creativo. 
            Cada imagen y cada video son un reflejo genuino de tus momentos más especiales.
            <span class="quote-end">”</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CameraIcon from 'vue-material-design-icons/Camera.vue';
import VideoCameraIcon from 'vue-material-design-icons/Video.vue';
import AccountGroupIcon from 'vue-material-design-icons/AccountBadge.vue';
import DroneIcon from 'vue-material-design-icons/Helicopter';
</script>

<style scoped>
.introduction {
  text-align: center;
  background-color: #1e1e1e;
  color: #fff;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  position: relative;
  background: url('https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455682815_880112290841534_5260424241854043392_n.jpg?stp=dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=boEyfa9RuUUQ7kNvgHSTBQw&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYDCOvKTkj1QOpzNLykz7KHtKVWuGFdE_7mHOPp20GZ5Rg&oe=66C57E36') no-repeat center center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.9);
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #00f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  width: 90%;
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
  text-align: center;
}

.section-icon {
  font-size: 4rem; /* Tamaño del ícono aumentado */
  color: #00f; /* Color del ícono */
  margin-bottom: 10px; /* Espacio entre el ícono y el título */
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
  position: relative;
  padding: 0 30px;
}

.quote-start,
.quote-end {
  font-size: 2rem;
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
    min-height: 100vh;
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
