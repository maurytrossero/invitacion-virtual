<template>
  <div class="header-logo" role="banner">
    <div class="carousel-container">
      <div class="carousel-track">
        <div
          v-for="(image, i) in duplicatedImages"
          :key="i"
          :style="{ backgroundImage: `url(${image})` }"
          class="carousel-slide"
        ></div>
      </div>
      <div class="overlay-gradient"></div>
    </div>
    <img
      :src="logoSrc"
      alt="Logo de Mauricio Trossero"
      class="logo"
      @click="goToInvitation"
      role="link"
      aria-label="Ir a la invitación"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const logoSrc =
  'https://www.dropbox.com/scl/fi/gv2k4qop077jvccqdhriu/LOGO.jpg?rlkey=isw4oc0cdjzp8k7kac4gv9wsp&st=i465hsay&raw=1'

const backgroundImages = ref([
  'https://www.dropbox.com/scl/fi/hgyvzblja8cj0wm6ni10j/fiesta-manfrey.jpg?rlkey=prijj0wu4jmnuq66zmxp9esjq&st=snbc1dzw&raw=1',
  'https://www.dropbox.com/scl/fi/d56ik6joirj0ns0d80s0m/axion2.jpg?rlkey=byfn0uncipahmaj3isq2hhpuq&st=gf5pfi2j&raw=1',
  'https://www.dropbox.com/scl/fi/g6yvj29gbtymue8hcr8mq/estadio-kempes.jpg?rlkey=napgyqztr2x1lxo5b8pkectxo&st=kj7kwqv0&raw=1',
  'https://www.dropbox.com/scl/fi/8p73n9x52xg065pigspf1/drone.jpg?rlkey=jei5o2h8ct3tol443vfbc28o5&st=a0d0otuh&raw=1'
])

// Computed para duplicar las imágenes y poder hacer loop infinito
const duplicatedImages = computed(() => [...backgroundImages.value, ...backgroundImages.value])

// Router para redirigir
const router = useRouter()
const goToInvitation = () => {
  router.push({ name: 'invitacion-boda-cristian-noe' })
}
</script>

<style scoped>
.header-logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 0px;
  background: #000;
}

.carousel-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%; /* Duplicado para loop */
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.carousel-track {
  display: flex;
  width: 200%;
  height: 100%;
  animation: scroll-carousel 40s linear infinite;
}

.carousel-slide {
  flex: 0 0 25%; /* 4 imágenes visibles en 100% ancho */
  background-size: cover;
  background-position: center;
}

.overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  pointer-events: none;
  z-index: 2;
}

.logo {
  position: relative;
  z-index: 10;
  max-width: 180px;
  height: auto;
  border: 5px solid #4A90E2;
  border-radius: 50%;
  box-shadow: 0 0 15px #4A90E2, 0 0 30px #4A90E2aa;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
}

.logo:hover {
  box-shadow: 0 0 30px #81b3ff, 0 0 50px #81b3ffaa;
  animation: pulseGlow 2s infinite ease-in-out;
}

@keyframes pulseGlow {
  0%,
  100% {
    box-shadow: 0 0 30px #81b3ff, 0 0 50px #81b3ffaa;
  }
  50% {
    box-shadow: 0 0 40px #a0c4ff, 0 0 70px #a0c4ffbb;
  }
}

@keyframes scroll-carousel {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 1024px) {
  .logo {
    max-width: 140px;
  }
}

@media (max-width: 768px) {
  .header-logo {
    height: 100vh;
    margin-bottom: 0;
  }
  .logo {
    max-width: 120px;
  }
}
</style>
