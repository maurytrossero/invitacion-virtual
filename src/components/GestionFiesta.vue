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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f7f7f7;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 2px solid #ccc;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.fiesta-titulo, .fiesta-subtitulo {
  text-align: center;
}

.fiesta-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3em;
  margin-bottom: 10px;
  color: #b98b4e; /* Color dorado */
}

.fiesta-subtitulo {
  font-family: 'Lora', serif;
  font-size: 1.5em;
  margin-bottom: 20px;
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
  text-align: center; /* Asegurar que el texto esté centrado */
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
    align-items: center;
  }

  .tarjeta {
    width: 90%;
    margin-bottom: 20px;
  }

  .tarjeta-contenido h2 {
    font-size: 1.2em;
  }

  .tarjeta-contenido p {
    font-size: 0.9em;
    margin-bottom: 15px;
  }

  .tarjeta-contenido button {
    font-size: 0.9em;
    padding: 8px 16px;
  }
}
</style>
