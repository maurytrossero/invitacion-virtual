<template>
  <div class="project-gallery">
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
  { id: 1, title: 'Bodas', image: 'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455348923_879500020902761_8536692325332632548_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZAlDZAT2VBEQ7kNvgGjUUO9&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYCplYscUwkgbuyPWI_BWEmkqOR-oFmqzukCnPlGqyFeQQ&oe=66C457E1' },
  { id: 2, title: 'Fiesta de 15 Años', image: 'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/327294169_707237770996519_1640135708337379976_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Uel5HLEcW1AQ7kNvgEDzMbZ&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYAWewH9b4lqW8A2kWuxZ-m-2PUjT5CG4GDANVw353cIrQ&oe=66C45AB7' },
  { id: 3, title: 'Egresos', image: 'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455270353_879507540902009_3828396222557473176_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DFOr05JQH1YQ7kNvgH53HHo&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYB1A3FmL3ZKQTLkKeSSSXC2JeU6gZP8jCnHnP_Do4qKgA&oe=66C45C75' }
];

const productProjects = [
  { id: 3, title: 'Fotografía de Accesorios', image: 'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455250963_879508620901901_5476384084199253931_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L-vUmsLFWIIQ7kNvgFNr0aX&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYC8hIaOebulKFYm5GEv3FTigED6DGyFKrocErlfeH2p4w&oe=66C44963' },
  { id: 4, title: 'Fotografía de Productos', image: 'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455359130_879508590901904_7968808005417451846_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YhBiIDqpwTMQ7kNvgFi5hJ-&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYAm1GmiLDbcJ6sbJCiJSUzzNLMmF6PwD1TVu9fgXxq-xw&oe=66C44C06' }
];

const institutionalProjects = [
  { id: 1, title: 'Video Publicitario', videoId: 'Erne885LLwU' },
  { id: 2, title: 'Video Entrevista', videoId: 'AauokHOTBvs' }
];

const aerialProjects = [
  { id: 7, title: 'Axion Freyre', image: 'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455631454_879555440897219_1020133484170355582_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WGa8TUegLDMQ7kNvgFPWIm2&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYARXns2joFjGSPU6F5x0UVpZGJORfGTXlzYnBiBPgMjAg&oe=66C46B88' },
  { id: 8, title: 'Estadio Kempes', image: 'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455640025_879555490897214_8965230795414648581_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fudAHCFFB6QQ7kNvgEHYnSY&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYB7qcp6LA5XuAZ89wCCiTBnbw1tBSW3NqiT0F7zoS1ATw&oe=66C48447' }
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
.project-gallery {
  padding: 40px;
  background-color: #000;
  margin-top: 80px; /* Añade margen superior para evitar solapamiento */
  margin-bottom: 80px; /* Añade margen inferior para evitar solapamiento */
}

.gallery-title {
  text-align: center;
  color: #00f;
  font-size: 2.5rem;
  margin-bottom: 50px;
}

.gallery-section {
  margin-bottom: 50px;
}

.section-title {
  text-align: center;
  color: #00f;
  font-size: 2rem;
  margin-bottom: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-item {
  margin: 15px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  transition: transform 0.2s ease;
}

.video-frame {
  width: 100%;
  height: 315px;
  border: none;
}

.gallery-item h4 {
  margin-top: 10px;
  color: #fff;
}

.image-viewer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.viewer-image {
  max-width: 90%;
  max-height: 90%;
  transition: transform 0.2s ease;
}

.viewer-image:hover {
  transform: scale(1.05);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .project-gallery {
    margin-top: 60px; /* Ajustar margen superior para dispositivos móviles */
    margin-bottom: 60px; /* Ajustar margen inferior para dispositivos móviles */
  }

  .gallery-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .gallery-item {
    width: 100%; /* Ajustar el tamaño en pantallas pequeñas */
  }

  .gallery-item img {
    height: auto;
  }
}
</style>
