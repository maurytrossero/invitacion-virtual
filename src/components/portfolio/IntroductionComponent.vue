<template>
  <div class="introduction">
    <div class="overlay">
      <h1 class="title">Mauricio Trossero</h1>
      <h2 class="subtitle">Fotógrafo y Productor Audiovisual</h2>
      <div class="description">
        <div class="sections-grid">
          <div class="section" 
            v-for="(s, i) in services" 
            :key="i" 
            :style="{ animationDelay: `${0.2 + i * 0.2}s` }">
            <div class="icon-container">
              <component :is="s.icon" class="section-icon" />
            </div>
            <h3 class="section-title">{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </div>
        </div>
        <p class="closing">
          <span class="quote-start">“</span>
          Nos dedicamos a capturar los momentos que realmente importan. Creemos en el poder de las imágenes y videos para contar historias profundas y reflejar emociones auténticas.
          <span class="quote-end">”</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Users, Camera, Video, PartyPopper } from 'lucide-vue-next';
import Drone from '@/components/icons/DroneIcon.vue';

const services = [
  {
    icon: Users,
    title: 'Eventos Sociales',
    text: 'Capturamos momentos especiales en 15 años, bodas, egresos, y más.',
  },
  {
    icon: Camera,
    title: 'Fotografía de Productos',
    text: 'Realizamos sesiones fotográficas para resaltar las características de tus productos.',
  },
  {
    icon: Video,
    title: 'Videos Institucionales',
    text: 'Producimos contenido visual que comunica la esencia de tu institución o empresa.',
  },
  {
    icon: Drone,
    title: 'Fotografía y Videos Aéreos',
    text: 'Utilizamos tecnología avanzada para capturar imágenes y videos desde perspectivas únicas.',
  },
  {
    icon: PartyPopper, // o PartyPopper de Lucide
    title: 'Invitación Interactiva',
    text: 'Crea experiencias digitales únicas para tus invitados con nuestra plataforma de invitaciones interactivas.',
  },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.introduction {
  position: relative;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 60px 20px;
  overflow: hidden;
  z-index: 0;
}
.introduction::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://dl.dropboxusercontent.com/scl/fi/cn3dnma47t7tjp65y4h0v/DSC_9439.jpg?rlkey=gzf3moia4tyi2ko9nsnp29od0');
  background-position: center;
  background-size: cover;
background-attachment: scroll; /* o simplemente eliminar esta línea */
  filter: grayscale(100%) brightness(0.4) contrast(1.2);
  z-index: -1;
}

.overlay {
  background: rgba(0, 0, 0, 0.6); /* Fondo negro semi-transparente para contraste */
  border: 1px solid #4A90E2;
  border-radius: 16px;
  padding: 40px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.title {
  font-size: 3rem;
  color: #4A90E2;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.4rem;
  color: #ccc;
  margin-bottom: 30px;
}

.sections-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.section {
  flex: 0 0 220px; /* ancho fijo */
  text-align: center;
  opacity: 0;
  animation: fadeInUp 1s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #1a1a1a;
  border: 2px solid #4A90E2;
  margin: 0 auto 15px;
  transition: transform 0.3s ease;
}

.icon-container:hover {
  transform: scale(1.1); /* Efecto de escalado en hover */
}

.section-icon {
  width: 36px;
  height: 36px;
  color: #4A90E2;
  transition: color 0.3s ease;
}

.icon-container:hover .section-icon {
  color: #fff; /* Cambio de color al pasar el cursor */
}

.section-title {
  font-size: 1.5rem;
  color: #4A90E2;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.section-title:hover {
  transform: scale(1.1);
}

p {
  color: #ddd;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
}

.closing {
  margin-top: 40px;
  font-size: 1.1rem;
  font-style: italic;
  padding: 0 10px;
}

.quote-start,
.quote-end {
  font-size: 2rem;
  color: #4A90E2;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.3rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .section-icon {
    width: 30px;
    height: 30px;
  }

  .closing {
    font-size: 1rem;
  }
}
</style>
