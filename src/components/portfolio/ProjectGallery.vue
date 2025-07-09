<template>
  <div class="project-gallery">
    <div class="overlay">
      <h2 class="gallery-title">Mi Portafolio</h2>

      <!-- Sección: Eventos Sociales -->
      <div class="gallery-section">
        <h3 class="section-title">Eventos Sociales</h3>
        <div class="gallery">
          <div v-for="project in eventsProjects" :key="project.id" class="gallery-item" @click="openViewer(project.image)">
            <img :src="project.image" :alt="project.title" />
            <h4>{{ project.title }}</h4>
          </div>
        </div>
      </div>

      <!-- Sección: Fotografía de Productos -->
      <div class="gallery-section">
        <h3 class="section-title">Fotografía de Productos</h3>
        <div class="gallery">
          <div v-for="project in productProjects" :key="project.id" class="gallery-item" @click="openViewer(project.image)">
            <img :src="project.image" :alt="project.title" />
            <h4>{{ project.title }}</h4>
          </div>
        </div>
      </div>

      <!-- Sección: Videos Institucionales -->
      <div class="gallery-section">
        <h3 class="section-title">Videos Institucionales</h3>
        <div class="gallery">
          <div v-for="project in institutionalProjects" :key="project.id" class="gallery-item">
            <iframe
              :src="`https://www.youtube.com/embed/${project.videoId}`"
              frameborder="0"
              allowfullscreen
              class="video-frame"
            ></iframe>
            <h4>{{ project.title }}</h4>
          </div>
        </div>
      </div>

      <!-- Sección: Fotografía y Videos Aéreos -->
      <div class="gallery-section">
        <h3 class="section-title">Fotografía y Videos Aéreos</h3>
        <div class="gallery">
          <div v-for="project in aerialProjects" :key="project.id" class="gallery-item" @click="openViewer(project.image)">
            <img :src="project.image" :alt="project.title" />
            <h4>{{ project.title }}</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Visor de Imagen -->
    <div v-if="isViewerOpen" class="image-viewer" @click.self="closeViewer">
      <span class="close-btn" @click="closeViewer">&times;</span>
      <img
        :src="currentImage"
        class="viewer-image"
        ref="viewerImage"
        @wheel="zoomImage"
        @mouseover="startZoom"
        @mouseleave="stopZoom"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const eventsProjects = [
  { id: 1, title: 'Bodas', image: 'https://www.dropbox.com/scl/fi/4i5i7lav1hbct29ibrmr5/CristianNoe.jpg?rlkey=9hi7n0mdfjl003zm81ko2mfvf&st=pm6jvs7t&raw=1' },
  { id: 2, title: 'Fiesta de 15 Años', image: 'https://www.dropbox.com/scl/fi/x4m0te4qdnwy4p3xyeozk/quinceAngie.jpg?rlkey=gon81dvzmpozx9ytequs3w9dy&st=504ik5vq&raw=1' },
  { id: 3, title: 'Egresos', image: 'https://www.dropbox.com/scl/fi/1d8zqvjutu17ifnk0usnj/Promo22Fasta.jpg?rlkey=dikoycmz6e52u9i7iq11ec4v2&st=mcwxqsk8&raw=1' }
];

const productProjects = [
  { id: 3, title: 'Fotografía de Producto', image: 'https://www.dropbox.com/scl/fi/gkkuk6j67vptnv43idd7r/DSC_1510.jpg?rlkey=ewry4iydjf7tg6sy8isl9vzn2&st=oz1kvhl5&raw=1' },
  { id: 4, title: 'Fotografía de Producto', image: 'https://www.dropbox.com/scl/fi/q6k3l195aiudsmaaiz73i/DSC_1376.jpg?rlkey=c8o8kms6k7x3g2r4wr3sys392&st=nip8ooxq&raw=1' },
  { id: 5, title: 'Fotografía de Producto', image: 'https://www.dropbox.com/scl/fi/l84krppwbdos8rc2q2j30/DSC_1262.jpg?rlkey=684ablwnqa0o1jp6jhua06fjo&st=m5ygfccp&raw=1' },
  { id: 6, title: 'Fotografía Gastronómica', image: 'https://www.dropbox.com/scl/fi/z2yxgmx2xt5n2whhb7sy5/producto1.jpg?rlkey=ayjrutn4p7gfs2rledee1o2dq&st=2a3pi8xa&raw=1' },
  { id: 7, title: 'Fotografía Gastronómica', image: 'https://www.dropbox.com/scl/fi/wh1bu25ym74riue12oufy/producto4.jpg?rlkey=903d1ly3bjmhp77nmv3c57hrb&st=x8wehih5&raw=1' },
  { id: 8, title: 'Fotografía Gastronómica', image: 'https://www.dropbox.com/scl/fi/pd55s3a779u230e0k6plp/producto3.jpg?rlkey=0b224l07iyx7lsmdl200234nl&st=7621hirg&raw=1' }


];

const institutionalProjects = [
  { id: 1, title: 'Video Publicitario', videoId: 'Erne885LLwU' },
  { id: 2, title: 'Video Entrevista', videoId: 'AauokHOTBvs' }
];

const aerialProjects = [
  { id: 7, title: 'Axion Freyre', image: 'https://www.dropbox.com/scl/fi/d56ik6joirj0ns0d80s0m/axion2.jpg?rlkey=byfn0uncipahmaj3isq2hhpuq&st=jz4kkta7&raw=1' },
  { id: 8, title: 'Estadio Mario Alberto Kempes', image: 'https://www.dropbox.com/scl/fi/g6yvj29gbtymue8hcr8mq/estadio-kempes.jpg?rlkey=napgyqztr2x1lxo5b8pkectxo&st=4108guai&raw=1' },
  { id: 9, title: 'Miramar de Ansenuza', image: 'https://www.dropbox.com/scl/fi/ubxehtsgkhfiu6wth1il9/miramar.jpg?rlkey=cck7x4ph09ktssbef22s4tvho&st=ax1h0te1&raw=1' }

];

const isViewerOpen = ref(false);
const currentImage = ref('');
const isZooming = ref(false);

function openViewer(imageSrc) {
  currentImage.value = imageSrc;
  isViewerOpen.value = true;
}

function closeViewer() {
  isViewerOpen.value = false;
}

function zoomImage(event) {
  event.preventDefault();
  const img = event.target;
  const scale = event.deltaY > 0 ? 0.9 : 1.1;
  img.style.transform = `scale(${(parseFloat(img.style.transform.replace('scale(', '').replace(')', '')) || 1) * scale})`;
}

function startZoom() {
  isZooming.value = true;
}

function stopZoom() {
  isZooming.value = false;
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.project-gallery {
  position: relative;
  padding: 60px 40px;
  background-color: #0f2027;
  background-image: url('https://www.dropbox.com/scl/fi/55ffixug06bri6e1pcx3j/imagen-de-fondo.jpg?rlkey=yhxxjdb9hekuu9hoy1nj4q3bi&st=h2liln5y&raw=1');
  background-size: cover;
  background-position: center;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: #ddd; /* texto general */
}

.overlay {
  background: rgba(0, 0, 0, 0.85);
  border-radius: 16px;
  padding: 30px 40px;
  border: 2px solid #4A90E2; /* mismo azul */
  box-shadow: 0 8px 20px rgba(0,0,0,0.6);
}

.gallery-title {
  text-align: center;
  color: #4A90E2; /* azul igual */
  font-size: 2.8rem;
  margin-bottom: 60px;
  font-weight: 600;
}

.gallery-section {
  margin-bottom: 60px;
}

.section-title {
  text-align: center;
  color: #4A90E2; /* azul igual */
  font-size: 2.2rem;
  margin-bottom: 30px;
  font-weight: 600;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.gallery-item {
  width: 300px;
  cursor: pointer;
  text-align: center;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  background: #1a1a1a; /* como el icon container */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
}

/* Delay animado para cada item */
.gallery-item:nth-child(1) { animation-delay: 0.1s; }
.gallery-item:nth-child(2) { animation-delay: 0.25s; }
.gallery-item:nth-child(3) { animation-delay: 0.4s; }
.gallery-item:nth-child(4) { animation-delay: 0.55s; }
.gallery-item:nth-child(5) { animation-delay: 0.7s; }
.gallery-item:nth-child(6) { animation-delay: 0.85s; }
.gallery-item:nth-child(7) { animation-delay: 1s; }
.gallery-item:nth-child(8) { animation-delay: 1.15s; }
.gallery-item:nth-child(9) { animation-delay: 1.3s; }

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-radius: 12px 12px 0 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(74, 144, 226, 0.7);
}

.gallery-item h4 {
  margin: 15px 0 20px;
  color: #ddd; /* texto secundario igual */
  font-weight: 600;
  font-size: 1.2rem;
  user-select: none;
}

.video-frame {
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  margin-bottom: 15px;
}

.image-viewer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  cursor: zoom-out;
}

.viewer-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(74, 144, 226, 0.9);
  transition: transform 0.3s ease;
  cursor: zoom-in;
  user-select: none;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 2.5rem;
  color: #4A90E2; /* azul */
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease;
}

.close-btn:hover {
  color: #81b3ff;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .project-gallery {
    padding: 40px 20px;
    margin: 60px 0;
  }

  .gallery-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .gallery-item {
    width: 100%;
  }

  .gallery-item img {
    height: auto;
  }

  .video-frame {
    height: auto;
  }
}

</style>
