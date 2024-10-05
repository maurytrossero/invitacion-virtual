<template>
  <div class="fiesta">
    <h1>Una gran fiesta junto a vos</h1>
    <p>Compartí tus fotos y videos de este hermoso día con el hashtag</p>
    <h2>#BodaNoeYCristian</h2>

    <div class="carrusel">
      <div class="carrusel-contenedor" :style="carruselStyle">
        <div class="carrusel-item" v-for="(imagen, index) in imagenes" :key="index">
          <img :src="imagen" alt="Foto de la boda" />
        </div>
      </div>
      <button @click="anterior" class="carrusel-boton carrusel-boton-anterior">Anterior</button>
      <button @click="siguiente" class="carrusel-boton carrusel-boton-siguiente">Siguiente</button>
      <button @click="activarPantallaCompleta" class="carrusel-boton carrusel-boton-fullscreen">Pantalla Completa</button>
    </div>
    <div v-if="pantallaCompleta" class="modal" @click="desactivarPantallaCompleta">
      <div class="modal-contenido">
        <div v-for="(imagen, index) in imagenes" :key="index" class="modal-imagen" :style="{ opacity: currentIndex === index ? 1 : 0 }">
          <img :src="imagen" alt="Foto de la boda en pantalla completa" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { getInstagramImages } from '@/services';

const instagramAuthUrl = 'https://api.instagram.com/oauth/authorize' +
  '?client_id=1246190323410382' +
  '&redirect_uri=https://invitacion-virtual-beige.vercel.app/auth/instagram/callback' +
  '&scope=user_profile,user_media' +
  '&response_type=code';

const imagenes = ref<string[]>([
  'https://cdn0.matrimonio.com.pe/article-real-wedding/021/3_2/960/jpg/89129.jpeg',
  'https://cdn0.bodas.net/article-vendor/45446/3_2/960/jpg/ec-228_1_45446-168966401847248.jpeg',
  'https://eldiariony.com/wp-content/uploads/sites/2/2022/03/meses-celebrar-boda-pexels-soner-gorkem-6119578.jpg?w=2600'
]); // Inicializar con las imágenes de muestra

const carruselIndex = ref(0);
const pantallaCompleta = ref(false);
const currentIndex = ref(0);

const carruselStyle = computed(() => ({
  transform: `translateX(-${carruselIndex.value * 100}%)`
}));

const anterior = () => {
  carruselIndex.value = (carruselIndex.value - 1 + imagenes.value.length) % imagenes.value.length;
};

const siguiente = () => {
  carruselIndex.value = (carruselIndex.value + 1) % imagenes.value.length;
};

const activarPantallaCompleta = () => {
  pantallaCompleta.value = true;
  currentIndex.value = carruselIndex.value; // Sincronizar el índice del carrusel con el modal
};

const desactivarPantallaCompleta = () => {
  pantallaCompleta.value = false;
};

const cambiarImagen = () => {
  if (pantallaCompleta.value) {
    currentIndex.value = (currentIndex.value + 1) % imagenes.value.length;
  }
};

let intervalId: number | undefined;

const fetchImages = async () => {
  try {
    console.log('Recuperando tokens desde localStorage');
    const accessToken = localStorage.getItem('instagram_access_token');
    const userId = localStorage.getItem('instagram_user_id');
    console.log('Token de acceso desde localStorage:', accessToken);
    console.log('User ID desde localStorage:', userId);

    if (!accessToken || !userId) {
      throw new Error('Falta el token de acceso o el user_id');
    }

    const fetchedImages = await getInstagramImages();
    console.log('Imágenes obtenidas de Instagram:', fetchedImages);
    imagenes.value = imagenes.value.concat(fetchedImages);
  } catch (error) {
    console.error('Error al obtener imágenes de Instagram:', error);
  }
};

onMounted(async () => {
  setTimeout(fetchImages, 2000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

watch(pantallaCompleta, (newVal) => {
  if (newVal) {
    currentIndex.value = carruselIndex.value;
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lora&display=swap');

.fiesta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f7f7f7;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 15px; /* Bordes redondeados añadidos */
  border: 1px solid #ddd; /* Borde opcional */
  overflow: hidden; /* Asegura que el contenido no sobresalga */
}

.fiesta h1, .fiesta h2 {
  font-family: 'Cormorant Garamond', serif;
  color: #b98b4e; /* Color dorado */
}

.fiesta p {
  font-family: 'Lora', serif;
  color: #333; /* Color gris oscuro */
}

.carrusel {
  position: relative;
  width: 80%;
  max-width: 600px;
  overflow: hidden;
  margin-top: 20px;
}

.carrusel-contenedor {
  display: flex;
  transition: transform 0.5s ease;
}

.carrusel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carrusel-item img {
  width: 100%;
  border-radius: 10px;
}

.carrusel-boton {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5em;
  border-radius: 5px;
}

.carrusel-boton-anterior {
  left: 10px;
}

.carrusel-boton-siguiente {
  right: 10px;
}

.carrusel-boton-fullscreen {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  top: unset;
}

.carrusel-boton:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Estilos específicos para dispositivos móviles */
@media (max-width: 768px) {
  .carrusel-boton {
    padding: 5px;
    font-size: 1em;
  }

  .carrusel-boton-anterior,
  .carrusel-boton-siguiente {
    top: 50%;
    transform: translateY(-50%);
  }

  .carrusel-boton-fullscreen {
    bottom: 20px;
    font-size: 0.8em; /* Reducir el tamaño del texto */
    white-space: nowrap; /* Asegura que el texto esté en una sola línea */
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-contenido {
  position: relative;
  width: 80%;
  max-width: 800px;
}
</style>
