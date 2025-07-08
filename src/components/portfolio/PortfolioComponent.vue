<template>
  <div class="portfolio">
    <HeaderLogo id="header-logo" />
    <Introduction id="introduction" />
    <ProjectGallery id="project-gallery" />
    <Services id="services" />
    <Testimonials id="testimonials" />
    <ContactForm id="contact-form" />

    <div class="scroll-buttons">
      <button @click="scrollToSection('introduction')" class="scroll-button up" aria-label="Scroll Up">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button @click="scrollToSection('contact-form')" class="scroll-button down" aria-label="Scroll Down">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Importa componentes reales aquí en producción:
const HeaderLogo = {
  name: 'HeaderLogo',
  props: ['id'],
  template: `<section :id="id" class="component-section"><h1>HeaderLogo</h1></section>`
}

const Introduction = {
  name: 'Introduction',
  props: ['id'],
  template: `<section :id="id" class="component-section"><h1>Introduction</h1></section>`
}

const ProjectGallery = {
  name: 'ProjectGallery',
  props: ['id'],
  template: `<section :id="id" class="component-section"><h1>ProjectGallery</h1></section>`
}

const Services = {
  name: 'Services',
  props: ['id'],
  template: `<section :id="id" class="component-section"><h1>Services</h1></section>`
}

const Testimonials = {
  name: 'Testimonials',
  props: ['id'],
  template: `<section :id="id" class="component-section"><h1>Testimonials</h1></section>`
}

const ContactForm = {
  name: 'ContactForm',
  props: ['id'],
  template: `<section :id="id" class="component-section"><h1>ContactForm</h1></section>`
}


const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.portfolio {
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background-color: #000;
  margin: 0;
  padding: 0;
}

/* Ejemplo de sección, para que puedas luego reemplazar en cada componente real */
.component-section {
  padding: 60px 20px;
  border-bottom: 1px solid #222; /* Separador tenue para distinguir secciones */
  min-height: 100vh; /* Para que cada sección ocupe pantalla completa */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  text-align: center;
}

/* Botones flotantes de scroll */
.scroll-buttons {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.scroll-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.scroll-button:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .scroll-buttons {
    bottom: 10px;
    gap: 5px;
  }

  .scroll-button {
    padding: 10px;
    font-size: 20px;
  }
}
</style>
