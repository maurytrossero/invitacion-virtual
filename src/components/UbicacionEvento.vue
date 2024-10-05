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
    imagen: "https://previews.dropbox.com/p/thumb/ACaMlmzHGmTPwpePKDxvzWwB8y1YprqI1N_Brv1NJZBMkk5mYxjFXWdFGSsmFmkIHox7Q5i1Na9cXGinfF7RIKEFb8LU4ycybRNhblv47NBRV4VMm00hdyVQm7l2duebSF3N_aNIMdUBe3oEej7Jiv3tOP0fWxYcxuWWvffHLu-F-2y0nX1SciIYgMxLMJXW-bY0UznKRQGhS0hUjUfhawIpv6FTd4Xs-MthaDe5jyQDtYFwSgVswf-yjqE_sQkdgyHimedPO3-oRgF2Iauo5gE-2i0U_nPl04KFvYr0swoXIkh8DUeG23f_flbvj0iRvOPI2Wd97N3Un2zAwfY7sPAa/p.jpeg?is_prewarmed=true",
    url: "https://maps.app.goo.gl/q6xZJabaxwE6Dbyi9"
  },
  {
    titulo: "Ceremonia Civil",
    direccion: "Avenida Siempre Viva 742",
    hora: "17:45",
    imagen: "https://previews.dropbox.com/p/thumb/ACa5-q0vD51Y5kYFXiLLIYJxjf4sHRgyhsmja7kgLHvxyd-jEknSPGkzvb5Ihg9bgeeVGmWd-i0I6T9_ZRI-o6mtLoDfwmMnW_mW4R1y3hED-W1aDcMaQIx8weNYkmeRq6_z0BEiZgtnZ5XBpuUn7Pf29yp866MafWGoOWAn9vUOmjS-YSziybllWcYYYnPrxQcdhjzwCgI3cAGDF8HT0I-jHVBo1OyD-vsfb87AhODOoef4xGozo7f9E2Wbe7itFG56ARdAa_ObyqkcBqCVThEDNg8OQdurK6fTt1r19xahnlw8Ro-AG4rapURUpFI-mxFwhIWB3XmDY6mmHyXlKcLN/p.png?is_prewarmed=true",
    url: "https://maps.app.goo.gl/sDjHZv7XphtKHbYT8"
  },
  {
    titulo: "Salón de Fiestas",
    direccion: "Calle Principal 456",
    hora: "18:00",
    imagen: "https://previews.dropbox.com/p/thumb/ACZvbONixrMN595yAeiP8fET7P1N3nZu542pEv9-UG6tSsRMEYSR7WXBxGKiPbtOjrfQDI6TCU4cIhOS4e_0pXoSloqP8JE02Mt4tRs7Z8iTWvGU7sju2eUfFrGpa9QYOsPQaZ4zQzWxDa5w9n9qrmHmvA5Yw-CgQeNwoHFRd7EO_XybZWw6WTbWslF6KEYdGZmdBYQV-ReWBiVa-hZ9TVUSl8LbqO70HrhYH5asTkj5ksOFJivR1XCdXXgwM5u2po6yubUJHfvxMfib1GRCBfpB1wGkNNc4hkmURqy4vNDIgW2bKMMrc3MWvwCktVLo4ckORla1wQhu7Bayx8gcOhiM/p.jpeg?is_prewarmed=true",
    url: "https://maps.app.goo.gl/gNDTyJ8PpaH3J6EP6"
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
  padding: 10px; /* Reducción del padding */
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
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
