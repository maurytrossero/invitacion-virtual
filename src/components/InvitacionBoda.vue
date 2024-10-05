<template>
  <div class="invitacion">
    <h1>Fiesta</h1>
    <p>Sábado 23 de Noviembre de 2024</p>
    <h2>Agendar fecha</h2>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

.invitacion {
  font-family: 'Playfair Display', serif;
  text-align: center;
  background-color: #f0eae5;
  color: #333;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: calc(100% - 40px); /* Ajusta el ancho considerando el padding */
  max-width: 800px; /* Establece un ancho máximo para mantener el contenido centrado y con buen aspecto */
  height: calc(100vh - 40px); /* Ajusta la altura considerando el padding */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  margin: 20px auto; /* Centra el contenedor y añade márgenes arriba y abajo */
}

.invitacion::before, .invitacion::after {
  content: '';
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  width: 25vw; /* Ajusta el tamaño en relación con el ancho del viewport */
  height: 25vh; /* Ajusta el tamaño en relación con la altura del viewport */
  max-width: 150px; /* Tamaño máximo para evitar que las imágenes sean demasiado grandes */
  max-height: 150px; /* Tamaño máximo para evitar que las imágenes sean demasiado grandes */
  background-image: url('@/../public/images/flor.png'); /* Usa la imagen directamente en el CSS */
}

.invitacion::before {
  top: 0;
  left: 0;
  background-position: top left; /* Posiciona la imagen en la esquina superior izquierda */
}

.invitacion::after {
  bottom: 0;
  right: 0;
  background-position: bottom right; /* Posiciona la imagen en la esquina inferior derecha */
  transform: rotate(180deg); /* Rota la imagen 180 grados */
}

h1, h2, h3 {
  margin: 0;
  padding: 10px 0;
}

p {
  margin: 10px 0;
}

@media (max-width: 768px) {
  .invitacion {
    padding: 10px;
    border-width: 1px;
    margin: 10px auto; /* Ajusta los márgenes para móviles */
    width: calc(100% - 20px); /* Ajusta el ancho considerando el padding y márgenes */
    max-width: 100%; /* Ajusta el ancho máximo para pantallas más pequeñas */
    height: calc(100vh - 20px); /* Ajusta la altura considerando el padding y márgenes */
  }
  
  h1 {
    font-size: 1.5em;
  }
  
  h2 {
    font-size: 1.2em;
  }
  
  h3 {
    font-size: 1em;
  }
  
  p {
    font-size: 0.9em;
  }
}
</style>
