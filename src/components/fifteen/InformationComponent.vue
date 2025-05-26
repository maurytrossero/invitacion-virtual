<template>
  <div class="information-wrapper">
    <!-- Adorno superior -->
    <img
      class="adorno superior"
      src="https://dl.dropboxusercontent.com/scl/fi/ng7hgiehcw270vy5fpkld/adorno-superior.png?rlkey=siwe9gz2wlzlaeq2ihi8jtdbd&st=j89m0pxm"
      alt="Adorno superior"
      aria-hidden="true"
    />

    <!-- Contenedor de tarjetas -->
    <div class="modals-container">
      <ModalComponent
        v-for="(modal, index) in modals"
        :key="index"
        :frontImage="modal.frontImage"
        :backContent="modal.backContent"
      >
        <template #front>
          <img :src="modal.icon" :alt="`Icono ${index + 1}`" style="width: 64px; height: 64px;" />
        </template>
      </ModalComponent>
    </div>

    <!-- Adorno inferior -->
    <img
      class="adorno inferior"
      src="https://dl.dropboxusercontent.com/scl/fi/fqccte9ioz89kmlog4lb3/adorno-inferior.png?rlkey=rsgkpbj2ty8jhwvh5kf2kwsy5&st=t9nn5t20"
      alt="Adorno inferior"
      aria-hidden="true"
    />
  </div>
</template>


<script setup>
import ModalComponent from './ModalComponent.vue'

const modals = [
  {
    frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0h0CMgMLU-zuXvv31t2jhUWKhY2HwJCrhA&s',
    icon: '/icono-torta.png',
    backContent: 'Este es el contenido de la primera tarjeta.'
  },
  {
    frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPnVDxHNIJTBlHK9JwfncsixbV8SwKb5Fvg&s',
    icon: '/icono-regalo.png',
    backContent: 'Este es el contenido de la segunda tarjeta.'
  },
  {
    frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb54uUvljGEDIhS6QTp1I-JrL4PDd6xKOjfQ&s',
    icon: '/icono-info.png',
    backContent: 'Este es el contenido de la tercera tarjeta.'
  }
]
</script>

<style scoped>
.information-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
  flex-direction: column;
}

.adorno {
  position: absolute;
  user-select: none;
  pointer-events: none;
  z-index: 10;
  opacity: 0.7;
  width: 25vw;
  height: auto;
}

.adorno.superior {
  top: 0;
  left: 0;
}

.adorno.inferior {
  bottom: 0;
  right: 0;
}

@media (max-width: 600px) {
  .adorno {
    width: 40vw;
    opacity: 0.6;
  }
}

.modals-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  z-index: 20;
}

@media (min-width: 768px) {
  .modals-container {
    flex-direction: row;
    justify-content: center;
  }
}

</style>
