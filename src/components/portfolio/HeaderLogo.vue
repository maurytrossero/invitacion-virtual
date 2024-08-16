<template>
    <div class="header-logo">
      <div class="carousel-container">
        <div class="carousel-track" :style="carouselStyle">
          <div
            v-for="image in backgroundImages"
            :key="image"
            :style="{ backgroundImage: `url(${image})` }"
            class="carousel-slide"
          ></div>
        </div>
      </div>
      <img :src="logoSrc" alt="Logo" class="logo" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  
  const logoSrc = 'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/326524611_1565285560665566_1754105422097280677_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Tt5ZMbWL7b0Q7kNvgFj1ofV&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYBopQ0KLBtrHGtCn9l91Q2GQI-zpAb9oDh6QzYinYnPqw&oe=66C43EDB'; // Logo
  
  // Vector de imágenes para el carrusel
  const backgroundImages = ref([
    'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455642071_879498430902920_6760471179070421456_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yTLC0jXaFLsQ7kNvgE9_01i&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYBz0N9TES5C0ABIVEPi-RCGryZEEmdxEgASKgEzwdYy6Q&oe=66C44469',
    'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455631454_879555440897219_1020133484170355582_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WGa8TUegLDMQ7kNvgFPWIm2&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYARXns2joFjGSPU6F5x0UVpZGJORfGTXlzYnBiBPgMjAg&oe=66C46B88',
    'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/455640025_879555490897214_8965230795414648581_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fudAHCFFB6QQ7kNvgEHYnSY&_nc_ht=scontent.fcor3-1.fna&cb_e2o_trans=q&oh=00_AYB7qcp6LA5XuAZ89wCCiTBnbw1tBSW3NqiT0F7zoS1ATw&oe=66C48447'
  ])
  
  const currentImageIndex = ref(0)
  
  const carouselStyle = computed(() => ({
    transform: `translateX(-${currentImageIndex.value * 100}%)`,
    transition: 'transform 1s ease-in-out'
  }))
  
  onMounted(() => {
    setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.value.length
    }, 5000) // Cambia la imagen cada 5 segundos
  })
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
  }
  
  .carousel-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }
  
  .carousel-track {
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  .carousel-slide {
    flex: 0 0 100%;
    background-size: cover;
    background-position: center;
  }
  
  .logo {
    z-index: 10;
    max-width: 150px;
    height: auto;
    border: 5px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    .header-logo {
      height: 60vh;
    }
  
    .logo {
      max-width: 100px;
    }
  }
  </style>
  