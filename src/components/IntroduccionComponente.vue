<template>
  <div class="cuenta-regresiva">
    <div class="overlay">
      <h2>NUESTRA BODA</h2>
      <h1>Noe & Cristian</h1>
      <h2>23/11/2024</h2>
      <h3>"Los esperamos para compartir un momento especial para nosotros lleno de emoción y alegría"</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Eliminar importaciones y variables no usadas
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.cuenta-regresiva {
  position: relative;
  height: calc(100vh - 50px); /* Reduce el margen inferior */
  margin: 5px; /* Aplica margen de 10px alrededor */
  background: url('https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/07/26/16588301170836.jpg') no-repeat center center;
  background-size: cover;
  overflow: hidden;
  border: 2px solid white; /* Añade el borde blanco */
  border-radius: 15px; /* Esquinas redondeadas */
  box-sizing: border-box; /* Incluye el borde en el tamaño del elemento */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Asegura que el texto esté centrado horizontalmente */
  color: white;
  font-family: 'Great Vibes', cursive;
  padding: 20px;
}

h1 {
  font-size: 3em;
  margin: 0;
  line-height: 1.1; /* Ajusta la altura de la línea para mejorar la legibilidad */
  overflow-wrap: break-word; /* Permite que el texto se rompa para ajustarse al contenedor */
  text-align: center; /* Centra el texto horizontalmente */
}

h2 {
  font-size: 2em;
  font-family: 'Open Sans', sans-serif;
  margin: 10px 0;
  line-height: 1.2; /* Ajusta la altura de la línea para mejorar la legibilidad */
  overflow-wrap: break-word; /* Permite que el texto se rompa para ajustarse al contenedor */
  text-align: center; /* Centra el texto horizontalmente */
}

/* Estilo para h3 */
h3 {
  font-size: 1.2em; /* Tamaño de fuente más pequeño para mayor legibilidad */
  font-family: 'Open Sans', sans-serif; /* Fuente legible */
  margin: 15px 0; /* Margen alrededor del texto */
  padding: 0 10px; /* Padding para evitar que se salga de los márgenes */
  line-height: 1.4; /* Aumenta la altura de la línea para mejorar la legibilidad */
  color: #f0f0f0; /* Color de texto contrastante */
  text-align: center; /* Centra el texto horizontalmente */
}

/* Responsive styling */
@media (max-width: 768px) {
  h1 {
    font-size: 2em;
    display: block;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    max-width: 90%;
    text-align: center; /* Asegura que el texto esté centrado horizontalmente */
    margin-right: 30px; /* Añade margen derecho */
  }
  h2 {
    font-size: 1.5em;
    display: block;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    max-width: 90%;
    text-align: center; /* Asegura que el texto esté centrado horizontalmente */
    margin-right: 30px; /* Añade margen derecho */
  }
  h3 {
    font-size: 1em; /* Ajusta el tamaño en dispositivos móviles */
    padding: 0 5px; /* Reduce el padding en dispositivos móviles */
    text-align: center; /* Asegura que el texto esté centrado horizontalmente */
    margin-right: 30px; /* Añade margen derecho */
  }
}
</style>
