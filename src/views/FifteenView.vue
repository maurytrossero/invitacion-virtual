<template>
  <div class="fifteen-view" ref="container">
    <section ref="section1" class="section">
      <KyaraInvitation />
    </section>


    <!-- Botones navegación -->
    <button 
      class="nav-btn up"
      @click="scrollToSection(0)"
      :disabled="currentSection === 0"
      aria-label="Subir"
    >
      ▲
    </button>

    <button 
      class="nav-btn down"
      @click="scrollToSection(1)"
      :disabled="currentSection === 1"
      aria-label="Bajar"
    >
      ▼
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import KyaraInvitation from '@/components/fifteen/CountdownComponent.vue'
import CarouselComponent from '@/components/fifteen/CarouselComponent.vue'

const container = ref(null)
const section1 = ref(null)
const section2 = ref(null)
const currentSection = ref(0)

function scrollToSection(index) {
  currentSection.value = index
  const sections = [section1.value, section2.value]
  if (sections[index]) {
    sections[index].scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Opcional: detectar scroll para actualizar currentSection
  container.value.addEventListener('scroll', () => {
    const scrollPos = container.value.scrollTop
    const height = window.innerHeight
    currentSection.value = scrollPos < height / 2 ? 0 : 1
  })
})
</script>

<style scoped>
.fifteen-view {
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
}

/* Cada sección ocupa toda la pantalla */
.section {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Botones navegación */
.nav-btn {
  position: fixed;
  left: 50%;               /* centro horizontal */
  transform: translateX(-50%);  /* centrar exactamente */
  background-color: rgba(182, 175, 160, 0.6);
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 50%;
  z-index: 1000;
  user-select: none;
  transition: background-color 0.3s ease;
}

/* Botones arriba y abajo */
.nav-btn.up {
  top: 1rem;
  bottom: auto;
}

.nav-btn.down {
  bottom: 1rem;
  top: auto;
}

/* Hover y disabled igual */
.nav-btn:hover:not(:disabled) {
  background-color: rgba(182, 175, 160, 0.9);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

/* Responsive */
@media (max-width: 600px) {
  .nav-btn {
    font-size: 1.4rem;
    padding: 0.25rem 0.5rem;
  }

  .nav-btn.up {
    top: 0.5rem;
  }

  .nav-btn.down {
    bottom: 0.5rem;
  }
}

</style>
