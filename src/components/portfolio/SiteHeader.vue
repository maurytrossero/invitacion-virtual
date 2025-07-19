<template>
  <header class="site-header">
    <nav>
      <ul>
        <li><button @click="scrollTo('header-logo')">Inicio</button></li>
        <li><button @click="scrollTo('introduction')">Introducción</button></li>
        <li><button @click="scrollTo('project-gallery')">Proyectos</button></li>
        <li><button @click="scrollTo('eventizate-showcase')">Eventízate</button></li>
        <li><button @click="scrollTo('contact-form')">Contacto</button></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
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
  padding: 10px 20px;
  border-bottom: 2px solid #4A90E2;
  z-index: 1000;
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
</style>
