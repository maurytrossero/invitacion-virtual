<template>
  <header class="site-header">
    <button 
      class="menu-toggle" 
      aria-label="Abrir menú"
      @click="menuOpen = !menuOpen"
      :aria-expanded="menuOpen.toString()"
    >
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </button>

    <nav :class="{ open: menuOpen }" @click.self="menuOpen = false">
      <ul>
        <li><button @click="scrollTo('header-logo'); menuOpen = false">Inicio</button></li>
        <li><button @click="scrollTo('introduction'); menuOpen = false">Introducción</button></li>
        <li><button @click="scrollTo('project-gallery'); menuOpen = false">Proyectos</button></li>
        <li><button @click="scrollTo('eventizate-showcase'); menuOpen = false">Eventízate</button></li>
        <li><button @click="scrollTo('contact-form'); menuOpen = false">Contacto</button></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false);

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  background: #000;
  border-bottom: 2px solid #4A90E2;
  z-index: 1000;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Botón hamburguesa */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  z-index: 1100;
}

.menu-toggle span {
  width: 28px;
  height: 3px;
  background: #4A90E2;
  border-radius: 2px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

/* Animación cuando está abierto */
.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg);
}

/* Nav */
nav {
  flex-grow: 1;
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav button {
  background: none;
  border: none;
  color: #4A90E2;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  padding: 6px 12px;
  transition: color 0.3s ease;
}

nav button:hover {
  color: #81b3ff;
  text-decoration: underline;
}

/* Responsive - móvil */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  nav {
    position: fixed;
    top: 52px; /* altura header */
    right: 0;
    background: #000;
    width: 200px;
    height: calc(100vh - 52px);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  }

  nav.open {
    transform: translateX(0);
  }

  nav ul {
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }

  nav button {
    font-size: 1.1rem;
    padding: 12px 10px;
    width: 100%;
    text-align: left;
  }
}
</style>
