<template>
    <div class="ubicacion-contenedor">
      <h1 class="ubicacion-titulo">Ubicación</h1>
      <div class="ubicacion">
        <div class="tarjeta" v-for="(lugar, index) in lugares" :key="index">
          <div class="tarjeta-trasera">
            <img :src="lugar.imagen" alt="Imagen del lugar" />
            <h2>{{ lugar.titulo }}</h2>
            <p>{{ lugar.direccion }}</p>
            <a :href="lugar.url" target="_blank">Ver en Google Maps</a>
          </div>
          <div class="tarjeta-delantera">
            <h2>{{ lugar.titulo }}</h2>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const lugares = [
    {
      titulo: "Iglesia",
      direccion: "Calle Falsa 123",
      imagen: "https://scontent.fcor3-1.fna.fbcdn.net/v/t31.18172-8/22384306_10211939262170924_349444510139960190_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f798df&_nc_eui2=AeHTnGQ7iBB5Q7hUKDEcKW0HZg-JQ43E44hmD4lDjcTjiDw-8BmqeAG3MDRt6c8Otjo&_nc_ohc=nBQnTiSTdiUQ7kNvgEJyftL&_nc_ht=scontent.fcor3-1.fna&oh=00_AYDiTu-3qDT9ppIVtYoV_6j-R5uWrIEiUenb3OVvUjfEtg&oe=66C2A37B",
      url: "https://maps.app.goo.gl/q6xZJabaxwE6Dbyi9"
    },
    {
      titulo: "Ceremonia Civil",
      direccion: "Avenida Siempre Viva 742",
      imagen: "https://scontent.fcor3-1.fna.fbcdn.net/v/t1.6435-9/44393519_10214650344586290_855092507908767744_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f798df&_nc_eui2=AeHn2MZJP6lpkdVtOu-spw-mHM1ZBDxr1ssczVkEPGvWy3NZDv8SVTFl9dr7DvU8J6E&_nc_ohc=bLxpQDpMcIcQ7kNvgFhXKZO&_nc_ht=scontent.fcor3-1.fna&oh=00_AYDgQNcA1NxmgvTX3bTZcB9UT6RuOBA057pQxnoeKwuMDQ&oe=66C286CA",
      url: "https://maps.app.goo.gl/n81e4V9mixXBax1k6"
    },
    {
      titulo: "Salón de Fiestas",
      direccion: "Calle Principal 456",
      imagen: "@/../public/images/club-abuelos.jpg",
      url: "https://maps.app.goo.gl/DHv8mVMrbmJgxZkAA"
    }
  ]
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lora&display=swap');
  
  .ubicacion-contenedor {
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
  
  .ubicacion-titulo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3em;
    margin-bottom: 20px;
    text-align: center;
    color: #b98b4e; /* Color dorado */
  }
  
  .ubicacion {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1920px; /* Asegurar que el contenedor ocupe el mismo tamaño que los componentes anteriores */
    height: calc(100vh - 80px); /* Resta el tamaño del título */
    padding: 20px;
    box-sizing: border-box;
  }
  
  .tarjeta {
    width: 300px;
    height: 200px;
    perspective: 1000px;
    margin: 10px;
  }
  
  .tarjeta-trasera, .tarjeta-delantera {
    width: 100%;
    height: 100%;
    background-color: #f5e6cc; /* Color cremita */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s;
  }
  
  .tarjeta-trasera {
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f5e6cc; /* Color cremita */
    color: #b98b4e; /* Color dorado */
  }
  
  .tarjeta-trasera img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .tarjeta-trasera h2, .tarjeta-delantera h2 {
    font-family: 'Lora', serif;
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .tarjeta-trasera p {
    margin-bottom: 10px;
  }
  
  .tarjeta-trasera a {
    color: #b98b4e; /* Color dorado */
    text-decoration: none;
    font-weight: bold;
  }
  
  .tarjeta-trasera a:hover {
    text-decoration: underline;
  }
  
  .tarjeta-delantera {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-family: 'Lora', serif;
    font-weight: bold;
    background-color: #b98b4e; /* Color dorado */
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .tarjeta:hover .tarjeta-delantera, .tarjeta:hover .tarjeta-trasera {
    transform: rotateY(180deg);
  }
  
  .tarjeta-delantera {
    transform: rotateY(0deg);
  }
  
  .tarjeta:hover .tarjeta-trasera {
    transform: rotateY(360deg);
  }
  
  @media (max-width: 768px) {
    .ubicacion-titulo {
      font-size: 2em;
    }
  
    .ubicacion {
      flex-direction: column;
      height: auto; /* Ajustar la altura en dispositivos móviles */
    }
  
    .tarjeta {
      width: 90%;
      margin-bottom: 20px;
    }
  
    .tarjeta-trasera, .tarjeta-delantera {
      font-size: 1.2em;
    }
  }
  </style>
  