<template>
  <div class="modal-backdrop" v-if="isVisible">
    <div class="modal">
      <div class="modal-header">
        <h3>{{ title }}</h3>
        <button class="modal-close" @click="$emit('onClose')">✖</button>
      </div>
      <div class="modal-body">
        <p v-html="message"></p> <!-- Asegúrate de que se use v-html aquí -->
      </div>
      <div class="modal-footer">
        <button class="modal-button" @click="$emit('onClose')">Cerrar</button>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      isVisible: {
        type: Boolean,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background-color: white;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  
  .modal-header h3 {
    margin: 0;
  }
  
  .modal-close {
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
  }
  
  .modal-body {
    margin: 20px 0;
  }
  
  .modal-footer {
    text-align: right;
  }
  
  .modal-button {
    background-color: #b98b4e;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .modal-button:hover {
    background-color: #9a733b;
  }
  </style>
  