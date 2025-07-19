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
              src="https://eventizate.mtproducciones.com.ar/invitacion/boda"
              title="Invitación Boda"
              frameborder="0"
              loading="lazy"
            ></iframe>
            <h4>Invitación para Boda</h4>
            <p>Una invitación elegante, con música, ubicación y confirmación.</p>
            <a
              href="https://eventizate.mtproducciones.com.ar/invitacion/boda"
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
  width: 100vw;
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
}

.eventizate-showcase::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
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
}

.title {
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.highlight {
  color: #4A90E2;
}

.subtitle {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2rem;
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
  width: 240px;
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
  width: 64px;
  height: 64px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.feature-icon {
  width: 32px;
  height: 32px;
  color: #4A90E2;
}

.feature-title {
  color: #4A90E2;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.previews {
  margin-top: 3rem;
}

.example-title {
  font-size: 1.8rem;
  color: #4A90E2;
  margin-bottom: 1.5rem;
}

.preview-cards {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.preview-card {
  background: #111;
  border: 1px solid #4A90E2;
  border-radius: 16px;
  padding: 20px;
  overflow: hidden;
  text-align: center;
}

.preview-card iframe {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  border: none;
  margin-bottom: 10px;
}

.preview-card h4 {
  font-size: 1.3rem;
  color: #4A90E2;
}

.preview-card p {
  color: #ccc;
}

.invitation-link {
  display: inline-block;
  margin-top: 10px;
  color: #4A90E2;
  text-decoration: underline;
  font-weight: 600;
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

@media (min-width: 768px) {
  .preview-cards {
    flex-direction: row;
    justify-content: center;
  }

  .preview-card {
    width: 45%;
  }
}
</style>
