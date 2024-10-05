<template>
  <div class="fiesta-contenedor">
    <h1 class="fiesta-titulo">Fiesta</h1>
    <h2 class="fiesta-subtitulo">Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.</h2>
    <div class="fiesta">
      <div class="tarjeta" v-for="(detalle, index) in detalles" :key="index">
        <div class="tarjeta-contenido">
          <h2>{{ detalle.titulo }}</h2>
          <p>{{ detalle.descripcion }}</p>
          <button @click="abrirModal(detalle)">{{ detalle.botonTexto }}</button>
        </div>
      </div>
    </div>
    <!-- Pasar isVisible en lugar de usar v-if -->
    <ModalDialog 
      :isVisible="mostrarModal" 
      :title="modalTitulo" 
      :message="modalMensaje" 
      @onClose="cerrarModal" 
    />
  </div>
</template>

<script lang="ts" setup>
// Importación del componente ModalDialog
import ModalDialog from './ModalDialog.vue';
import { ref } from 'vue';

// Definición del tipo para los detalles
interface Detalle {
  titulo: string;
  descripcion: string;
  botonTexto: string;
  mensaje: string;
}

// Estado para el modal
const mostrarModal = ref(false);
const modalTitulo = ref('');
const modalMensaje = ref('');

// Array de detalles con el tipo definido
const detalles: Detalle[] = [
  {
    titulo: "Música",
    descripcion: "¿Cuál es la canción que no debe faltar en la PlayList de la noche?",
    botonTexto: "Sugerir canción",
    mensaje: "Envíanos tus sugerencias de canciones que quieres escuchar.",
  },
  {
    titulo: "Código de Vestimenta",
    descripcion: "Te orientamos para tu vestuario",
    botonTexto: "Ver más",
    mensaje: "Para que estés acorde con el ambiente festivo se recomienda vestimenta elegante de fiesta.<br /> <br />Te hacemos una pequeña solicitud: evitar vestidos blancos. <br />Gracias",
  },
  {
    titulo: "Valor Tarjeta",
    descripcion: "Conocé los valores de las tarjetas y los datos para el pago",
    botonTexto: "+ Info",
    mensaje: "Valor de la tarjeta <br />Mayores $25000 - Menores $15000. <br /> <br />Tiempo para confirmar y pagar<br /> hasta el 15/11/2024 inclusive.<br /> <br />Datos para el pago al Tel.<br /> 3564 419817",
  }
];

// Función para abrir el modal con el contenido adecuado
const abrirModal = (detalle: Detalle) => {
  modalTitulo.value = detalle.titulo;
  modalMensaje.value = detalle.mensaje;
  mostrarModal.value = true;
};

// Función para cerrar el modal
const cerrarModal = () => {
  mostrarModal.value = false;
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lora&display=swap');

.fiesta-contenedor {
  font-family: 'Playfair Display', serif;
  text-align: center;
  background-color: #f0eae5;
  color: #333;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: calc(100% - 10px); /* Ajuste de ancho según lo solicitado */
  height: calc(100vh - 50px); /* Ajuste de alto según lo solicitado */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  margin: 5px auto; /* Márgenes pequeños para mantener el estilo centrado */
}

.fiesta-titulo, .fiesta-subtitulo {
  text-align: center;
}

.fiesta-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5em; /* Reducido */
  margin-bottom: 5px; /* Reducido */
  color: #b98b4e;
}

.fiesta-subtitulo {
  font-family: 'Lora', serif;
  font-size: 1.2em; /* Reducido */
  margin-bottom: 10px; /* Reducido */
  color: #333;
}

.fiesta {
  display: flex;
  justify-content: center; /* Centra las tarjetas en el contenedor */
  align-items: flex-start; /* Alinea las tarjetas en la parte superior */
  flex-wrap: wrap; /* Permite que las tarjetas se envuelvan en varias filas si es necesario */
  width: 100%;
  max-width: 1920px;
  padding: 0 20px; /* Reduce el espacio superior e inferior, ajusta el espacio lateral */
  box-sizing: border-box;
}

.tarjeta {
  width: 20%; /* Mantiene el ancho de las tarjetas */
  height: auto; /* Cambiado para que el contenido ajuste automáticamente */
  margin: 10px; /* Aumentado para mayor separación entre tarjetas */
}



.tarjeta-contenido {
  width: 100%;
  background-color: #f5e6cc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px; /* Reducido */
  box-sizing: border-box;
  text-align: center;
}

.tarjeta-contenido h2 {
  font-family: 'Lora', serif;
  font-size: 1.2em; /* Reducido */
  margin: 5px 0; /* Reducido */
}

.tarjeta-contenido p {
  font-family: 'Lora', serif;
  font-size: 0.9em; /* Reducido */
  margin-bottom: 10px; /* Reducido */
}

.tarjeta-contenido button {
  background-color: #b98b4e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px; /* Reducido */
  font-family: 'Lora', serif;
  font-size: 0.9em; /* Reducido */
  cursor: pointer;
}

.tarjeta-contenido button:hover {
  background-color: #9a733b;
}

@media (max-width: 768px) {
  .fiesta-titulo {
    font-size: 1.8em; /* Ajustado a un tamaño más pequeño */
  }

  .fiesta-subtitulo {
    font-size: 0.9em; /* Ajustado a un tamaño más pequeño */
  }

  .fiesta {
    flex-direction: column;
    align-items: center;
  }

  .tarjeta {
    width: 95%; /* Aumentado para ocupar más espacio */
    margin-bottom: 5px; /* Reducido */
  }

  .tarjeta-contenido h2 {
    font-size: 1.1em; /* Ajustado a un tamaño más pequeño */
  }

  .tarjeta-contenido p {
    font-size: 0.8em; /* Ajustado a un tamaño más pequeño */
    margin-bottom: 5px; /* Reducido */
  }

  .tarjeta-contenido button {
    font-size: 0.8em; /* Ajustado a un tamaño más pequeño */
    padding: 6px 12px; /* Reducido */
  }
}

</style>

