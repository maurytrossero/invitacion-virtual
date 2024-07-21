<template>
  <div class="fiesta">
    <h1>Una gran fiesta junto a vos</h1>
    <p>Compartí tus fotos y videos de este hermoso día con el hashtag</p>
    <h2>#BodaEmaYJorge</h2>
    <div class="carrusel">
      <div class="carrusel-contenedor" :style="carruselStyle">
        <div class="carrusel-item" v-for="(imagen, index) in imagenes" :key="index">
          <img :src="imagen" alt="Foto de la boda" />
        </div>
      </div>
      <button @click="anterior" class="carrusel-boton carrusel-boton-anterior">Anterior</button>
      <button @click="siguiente" class="carrusel-boton carrusel-boton-siguiente">Siguiente</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const imagenes = ref([
  'https://cdn0.matrimonio.com.pe/article-real-wedding/021/3_2/960/jpg/89129.jpeg',
  'https://cdn0.bodas.net/article-vendor/45446/3_2/960/jpg/ec-228_1_45446-168966401847248.jpeg',
  'https://eldiariony.com/wp-content/uploads/sites/2/2022/03/meses-celebrar-boda-pexels-soner-gorkem-6119578.jpg?w=2600'
]);

const carruselIndex = ref(0);

const carruselStyle = computed(() => ({
  transform: `translateX(-${carruselIndex.value * 100}%)`
}));

const anterior = () => {
  carruselIndex.value = (carruselIndex.value - 1 + imagenes.value.length) % imagenes.value.length;
};

const siguiente = () => {
  carruselIndex.value = (carruselIndex.value + 1) % imagenes.value.length;
};
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

.carrusel-boton:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 768px) {
  .fiesta h1 {
    font-size: 1.5em;
  }

  .fiesta h2 {
    font-size: 1.2em;
  }

  .carrusel {
    width: 100%;
  }
}
</style>
