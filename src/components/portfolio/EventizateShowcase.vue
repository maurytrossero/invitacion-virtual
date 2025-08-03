<template>
  <section class="eventizate-showcase" id="eventizate-showcase">
    <div class="overlay">
    <h2 class="title">
    🎉 Descubrí 
    <a href="https://eventizate.mtproducciones.com.ar/" target="_blank" rel="noopener noreferrer" class="highlight-link">
        Eventízate
    </a>
    </h2>
      <p class="subtitle">Invitaciones digitales y galerías interactivas, todo en una sola plataforma.</p>

      <div class="features">
        <div
          class="feature-card"
          v-for="(item, index) in features"
          :key="index"
          :style="{ animationDelay: `${0.2 + index * 0.2}s` }"
        >
          <div class="icon-container">
            <component :is="item.icon" class="feature-icon" />
          </div>
          <h3 class="feature-title">{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>

      <div class="previews">
        <h3 class="example-title">🌟 Ejemplos</h3>
        <div class="preview-cards">
          <div class="preview-card">
            <iframe
              src="https://eventizate.mtproducciones.com.ar/invitacion/boda-noe-y-cristian"
              title="Invitación Boda"
              frameborder="0"
              loading="lazy"
            ></iframe>
            <h4>Invitación para Boda</h4>
            <p>Una invitación elegante, con música, ubicación y confirmación.</p>
            <a
              href="hhttps://eventizate.mtproducciones.com.ar/invitacion/boda-noe-y-cristian"
              target="_blank"
              class="invitation-link"
            >Abrir invitación</a>
          </div>

          <div class="preview-card">
            <iframe
              src="https://eventizate.mtproducciones.com.ar/invitacion/angy"
              title="Invitación 15 Años"
              frameborder="0"
              loading="lazy"
            ></iframe>
            <h4>Invitación para 15 Años</h4>
            <p>Estilo juvenil, animaciones, galería y cuenta regresiva.</p>
            <a
              href="https://eventizate.mtproducciones.com.ar/invitacion/angy"
              target="_blank"
              class="invitation-link"
            >Abrir invitación</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PartyPopper, Image } from 'lucide-vue-next';

const features = [
  {
    icon: PartyPopper,
    title: 'Invitaciones Virtuales',
    text: 'Diseños únicos y personalizados para cada ocasión. Enviá por WhatsApp o redes.',
  },
  {
    icon: Image,
    title: 'Galería Interactiva',
    text: 'Tus invitados pueden subir fotos y vivir el evento en tiempo real.',
  },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.eventizate-showcase {
  position: relative;
  width: 100%;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 60px 20px;
  box-sizing: border-box;
  z-index: 0;
  text-align: center;
  overflow-x: hidden; /* ✅ importante */
}

.eventizate-showcase::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://www.dropbox.com/scl/fi/1y4umbmt9ybmxcz8n96ir/Captura-de-pantalla-2025-07-18-212839.jpg?rlkey=77j291310fflfy85nzou84h05&raw=1') no-repeat center center;
  background-size: cover;
  filter: grayscale(100%) brightness(0.4) contrast(1.2);
  z-index: -1;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #4A90E2;
  border-radius: 16px;
  padding: 40px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}

.title {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 10px;
}

.highlight-link {
  color: #4A90E2;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.highlight-link:hover {
  color: #72a3f9;
  text-decoration: underline;
}

.subtitle {
  font-size: 1.4rem;
  color: #ccc;
  margin-bottom: 30px;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 3rem;
}

.feature-card {
  background: #1a1a1a;
  border: 1px solid #4A90E2;
  border-radius: 12px;
  padding: 30px 20px;
  flex: 0 0 220px;
  max-width: 100%;
  box-sizing: border-box;
  text-align: center;
  animation: fadeInUp 1s forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.icon-container {
  background: #111;
  border: 2px solid #4A90E2;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.feature-icon {
  width: 36px;
  height: 36px;
  color: #4A90E2;
}

.feature-title {
  font-size: 1.5rem;
  color: #4A90E2;
  margin-bottom: 10px;
}

.previews {
  margin-top: 3rem;
}

.example-title {
  font-size: 1.8rem;
  color: #4A90E2;
  margin-bottom: 1.5rem;
}

/* ... ya está todo tu estilo previo ... reemplazamos solo esto: */

.preview-card {
  background: transparent;
  border: none;
  padding: 0;
  flex: 0 0 420px;
  max-width: 100%;
  text-align: center;
}

.preview-card iframe {
  width: 100%;
  height: 480px; /* más alto para evitar scroll */
  border-radius: 30px;
  border: 8px solid #1a1a1a;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  margin-bottom: 15px;
  overflow: hidden;
  scrollbar-width: none; /* Firefox */
}

/* Oculta scrollbar en WebKit (Chrome, Safari) */
.preview-card iframe::-webkit-scrollbar {
  display: none;
}

.preview-card h4 {
  font-size: 1.3rem;
  color: #4A90E2;
}

.preview-card p {
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
}


.invitation-link {
  display: inline-block;
  margin-top: 10px;
  color: #4A90E2;
  text-decoration: underline;
  font-weight: 600;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.3rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .feature-title {
    font-size: 1.3rem;
  }

  .feature-icon {
    width: 30px;
    height: 30px;
  }

  .example-title {
    font-size: 1.5rem;
  }

  .preview-card {
    flex: 0 0 100%;
  }
}
</style>


