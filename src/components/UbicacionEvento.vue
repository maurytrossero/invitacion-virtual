<template>
  <div class="ubicacion-contenedor">
    <h1 class="ubicacion-titulo">Lugar</h1>
    <div class="ubicacion">
      <div class="tarjeta" v-for="(lugar, index) in lugares" :key="index">
        <div class="tarjeta-trasera">
          <img :src="lugar.imagen" alt="Imagen del lugar" />
          <h2>{{ lugar.titulo }}</h2>
          <p>{{ lugar.hora }} hs.</p>
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
    titulo: "Ceremonia Religiosa",
    direccion: "Calle Falsa 123",
    hora: "17:00",
    imagen: "https://dl.dropboxusercontent.com/scl/fi/4by13m0e74vyw6dxlrv6i/iglesia.jpg?rlkey=6ixcspd3h0l035aw30o5x3ig2",
    url: "https://maps.app.goo.gl/q6xZJabaxwE6Dbyi9"
  },
  {
    titulo: "Ceremonia Civil",
    direccion: "Avenida Siempre Viva 742",
    hora: "17:45",
    imagen: "https://dl.dropboxusercontent.com/scl/fi/w5iwgv12bp2hbqzba8sxh/regitro.png?rlkey=pzfn3azdmampghckp8nxz21zv",
    url: "https://maps.app.goo.gl/sDjHZv7XphtKHbYT8"
  },
  {
    titulo: "Salón de Fiestas",
    direccion: "Calle Principal 456",
    hora: "18:00",
    imagen: "https://dl.dropboxusercontent.com/scl/fi/yov2bdlkrw4c3sz4gdt2h/club.jpg?rlkey=ugtwvsi1qdetyeyip52uhc5jy",
    url: "https://maps.app.goo.gl/gNDTyJ8PpaH3J6EP6"
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lora&display=swap');

.ubicacion-contenedor {
  font-family: 'Playfair Display', serif;
    text-align: center;
    background-color: #f0eae5; /* Color de fondo */
    color: #333; /* Color del texto */
    padding: 20px;
    border: 2px solid #ccc; /* Borde del contenedor */
    border-radius: 10px; /* Borde redondeado */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra */
    width: calc(100% - 10px); /* Ajuste de ancho según lo solicitado */
    height: calc(100vh - 50px); /* Ajuste de alto según lo solicitado */
    display: flex;
    flex-direction: column; /* Cambiado a columna */
    justify-content: center; /* Centrar verticalmente */
    align-items: center; /* Centrar horizontalmente */
    box-sizing: border-box; /* Incluir padding y border en el tamaño total */
    position: relative;
    overflow: hidden; /* Evitar desbordamiento */
    margin: 5px auto; /* Mantener el componente centrado */
}


.ubicacion-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5em; /* Reducción del tamaño de fuente */
  margin-bottom: 15px; /* Reducción del margen */
  text-align: center;
  color: #b98b4e;
}

.ubicacion {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1920px;
  height: auto; /* Cambiado para que no limite la altura */
  padding: 10px; /* Reducción del padding */
  box-sizing: border-box;
}

.tarjeta {
  width: 90%; /* Ampliar el ancho de las tarjetas en móvil */
  max-width: 280px; /* Limitar el ancho máximo */
  height: 150px; /* Reducción de la altura */
  perspective: 1000px;
  margin: 5px; /* Reducción del margen */
}

.tarjeta-trasera, .tarjeta-delantera {
  width: 100%;
  height: 100%;
  background-color: #f5e6cc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.6s;
  padding: 5px; /* Reducción del padding */
  box-sizing: border-box;
  overflow: hidden;
}

.tarjeta-trasera {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b98b4e;
  text-align: center;
}

.tarjeta-trasera img {
  width: 50px; /* Reducción del tamaño de la imagen */
  height: 50px; /* Reducción del tamaño de la imagen */
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 5px; /* Reducción del margen */
}

.tarjeta-trasera h2, .tarjeta-delantera h2 {
  font-family: 'Lora', serif;
  font-size: 1.2em; /* Reducción del tamaño de fuente */
  margin: 5px 0; /* Reducción del margen */
}

.tarjeta-trasera p {
  font-size: 0.8em; /* Reducción del tamaño de fuente */
  margin-bottom: 5px; /* Reducción del margen */
}

.tarjeta-trasera a {
  color: #b98b4e;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8em; /* Reducción del tamaño de fuente */
}

.tarjeta-trasera a:hover {
  text-decoration: underline;
}

.tarjeta-delantera {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em; /* Reducción del tamaño de fuente */
  font-family: 'Lora', serif;
  font-weight: bold;
  background-color: #b98b4e;
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
    font-size: 2em; /* Reducción del tamaño de fuente para pantallas pequeñas */
  }

  .ubicacion {
    flex-direction: column;
    height: auto; /* Permitir que el contenedor se ajuste a su contenido */
  }

  .tarjeta {
    width: 90%;
    margin-bottom: 10px; /* Reducción del margen inferior */
  }

  .tarjeta-trasera, .tarjeta-delantera {
    font-size: 1em; /* Reducción del tamaño de fuente */
  }
  
  .tarjeta-trasera h2, .tarjeta-delantera h2 {
    font-size: 1.2em; /* Reducción del tamaño de fuente */
  }

  .tarjeta-trasera p {
    font-size: 0.75em; /* Reducción del tamaño de fuente */
  }

  .tarjeta-trasera a {
    font-size: 0.75em; /* Reducción del tamaño de fuente */
  }
}
</style>
