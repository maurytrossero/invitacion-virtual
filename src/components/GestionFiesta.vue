<template>
    <div class="fiesta-contenedor">
      <h1 class="fiesta-titulo">Fiesta</h1>
      <h2 class="fiesta-subtitulo">Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.</h2>
      <div class="fiesta">
        <div class="tarjeta" v-for="(detalle, index) in detalles" :key="index">
          <div class="tarjeta-contenido">
            <h2>{{ detalle.titulo }}</h2>
            <p>{{ detalle.descripcion }}</p>
            <button @click="detalle.accion">{{ detalle.botonTexto }}</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const detalles = [
    {
      titulo: "Música",
      descripcion: "¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?",
      botonTexto: "Sugerir canción",
      accion: () => {
        // Lógica para sugerir canción
        alert("Funcionalidad de sugerir canción próximamente disponible.");
      }
    },
    {
      titulo: "Código de Vestimenta",
      descripcion: "Una orientación para tu vestuario",
      botonTexto: "Ver más",
      accion: () => {
        // Lógica para ver más sobre el código de vestimenta
        alert("Funcionalidad de código de vestimenta próximamente disponible.");
      }
    },
    {
      titulo: "Valor Tarjeta",
      descripcion: "Conocé los valores de las tarjetas y los datos para el pago",
      botonTexto: "+ Info",
      accion: () => {
        // Lógica para más información sobre el valor de la tarjeta
        alert("Funcionalidad de valor tarjeta próximamente disponible.");
      }
    }
  ]
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lora&display=swap');
  
  .fiesta-contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #f7f7f7;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .fiesta-titulo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3em;
    margin-bottom: 10px;
    text-align: center;
    color: #b98b4e; /* Color dorado */
  }
  
  .fiesta-subtitulo {
    font-family: 'Lora', serif;
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: center;
    color: #333; /* Color gris oscuro */
  }
  
  .fiesta {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1920px; /* Asegurar que el contenedor ocupe el mismo tamaño que los componentes anteriores */
    padding: 20px;
    box-sizing: border-box;
  }
  
  .tarjeta {
    width: 300px;
    height: 200px;
    perspective: 1000px;
    margin: 10px;
  }
  
  .tarjeta-contenido {
    width: 100%;
    height: 100%;
    background-color: #f5e6cc; /* Color cremita */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .tarjeta-contenido h2 {
    font-family: 'Lora', serif;
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .tarjeta-contenido p {
    font-family: 'Lora', serif;
    font-size: 1em;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .tarjeta-contenido button {
    background-color: #b98b4e; /* Color dorado */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: 'Lora', serif;
    font-size: 1em;
    cursor: pointer;
  }
  
  .tarjeta-contenido button:hover {
    background-color: #9a733b; /* Color dorado oscuro */
  }
  
  @media (max-width: 768px) {
    .fiesta-titulo {
      font-size: 2em;
    }
  
    .fiesta-subtitulo {
      font-size: 1em;
    }
  
    .fiesta {
      flex-direction: column;
    }
  
    .tarjeta {
      width: 90%;
      margin-bottom: 20px;
    }
  
    .tarjeta-contenido {
      font-size: 1.2em;
    }
  }
  </style>
  