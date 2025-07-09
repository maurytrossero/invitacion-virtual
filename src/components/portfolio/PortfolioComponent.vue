<template>
  <div class="portfolio">
    <HeaderLogo id="header-logo" />
    <Introduction id="introduction" />
    <ProjectGallery id="project-gallery" />
    <Services id="services" />
    <Testimonials id="testimonials" />
    <ContactForm id="contact-form" />

    <div class="scroll-buttons">
      <button
        @click="scrollPrev"
        :disabled="!hasPrev"
        class="scroll-button up"
        aria-label="Sección anterior"
      >
        ▲
      </button>
      <button
        @click="scrollNext"
        :disabled="!hasNext"
        class="scroll-button down"
        aria-label="Sección siguiente"
      >
        ▼
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeaderLogo from '@/components/HeaderLogo.vue'
import Introduction from '@/components/Introduction.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'
import Services from '@/components/Services.vue'
import Testimonials from '@/components/Testimonials.vue'
import ContactForm from '@/components/ContactForm.vue'

const sections = [
  'header-logo',
  'introduction',
  'project-gallery',
  'services',
  'testimonials',
  'contact-form'
]

const hasPrev = ref(true)
const hasNext = ref(true)
const currentSectionIndex = ref(0)

// Función para hacer scroll a una sección
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function updateButtons() {
  // Habilitamos el botón de subir si no estamos en la primera sección
  hasPrev.value = currentSectionIndex.value > 0
  // Habilitamos el botón de bajar si no estamos en la última sección
  hasNext.value = currentSectionIndex.value < sections.length - 1
}

function scrollNext() {
  if (currentSectionIndex.value < sections.length - 1) {
    currentSectionIndex.value++
    scrollToSection(sections[currentSectionIndex.value])
  }
}

function scrollPrev() {
  if (currentSectionIndex.value > 0) {
    currentSectionIndex.value--
    scrollToSection(sections[currentSectionIndex.value])
  }
}

// Manejador de rueda del mouse para activar scroll
function handleMouseWheel(event) {
  if (event.deltaY > 0 && hasNext.value) {
    scrollNext()
  } else if (event.deltaY < 0 && hasPrev.value) {
    scrollPrev()
  }
}

// Manejador de scroll para detectar la posición de la sección actual
function handleScroll() {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  let sectionDetected = false

  for (let i = 0; i < sections.length; i++) {
    const el = document.getElementById(sections[i])
    if (el && el.offsetTop <= scrollY + windowHeight / 2 && !sectionDetected) {
      currentSectionIndex.value = i
      sectionDetected = true
    }
  }

  updateButtons()
}

onMounted(() => {
  window.addEventListener('wheel', handleMouseWheel, { passive: true })
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateButtons() // Aseguramos que los botones estén bien configurados al inicio
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleMouseWheel)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* General layout */
html, body, #app {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

.portfolio {
  font-family: 'Poppins', sans-serif;
  background: #000;
  color: #fff;
  margin: 0;
  padding: 0;
}

.portfolio > * {
  scroll-margin-top: 80px;
  margin: 0;
  padding: 0;
}

/* Secciones */
HeaderLogo,
Introduction,
ProjectGallery,
Services,
Testimonials,
ContactForm {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  border-bottom: 1px solid #222;
}

/* Botones de scroll */
.scroll-buttons {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
  pointer-events: none;
}

.scroll-button {
  pointer-events: all;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #00f;
  color: #fff;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  -webkit-tap-highlight-color: transparent;
}

.scroll-button:hover:not(:disabled) {
  background: #00f;
  color: #fff;
  transform: scale(1.1);
}

.scroll-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .scroll-button {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }
}
</style>
