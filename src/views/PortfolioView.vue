<template>
  <div id="portfolio-view">
    <HeaderLogo />
    <IntroductionComponent />
    <ProjectGallery />
    <ContactForm />
  </div>
</template>

<script setup>
import HeaderLogo from '@/components/portfolio/HeaderLogo.vue';
import IntroductionComponent from '@/components/portfolio/IntroductionComponent.vue';
import ProjectGallery from '@/components/portfolio/ProjectGallery.vue';
import ContactForm from '@/components/portfolio/ContactForm.vue';
</script>

<style scoped>
#portfolio-view {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
  background-color: #000; /* Fondo negro para el tema oscuro */
}

/* Asegurar que los elementos se adapten bien en dispositivos pequeños */
@media (max-width: 768px) {
  #portfolio-view {
    padding: 0 10px; /* Añadir padding lateral para evitar que el contenido toque los bordes de la pantalla */
  }

  /* Ajustar margenes y tamaños de los componentes si es necesario */
  header-logo,
  introduction-component,
  project-gallery,
  contact-form {
    margin-bottom: 20px; /* Añadir espacio entre los componentes */
  }

  h1, h2, h3, p {
    font-size: 90%; /* Reducir tamaño de texto en dispositivos pequeños */
  }
}
</style>
