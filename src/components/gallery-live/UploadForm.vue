<!-- UploadForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <input type="file" accept="image/*" @change="handleFile" />
    <textarea v-model="message" placeholder="Escribí un mensaje..."></textarea>
    <button type="submit">Enviar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { uploadImageWithMessage } from '@/services/galleryService'

const file = ref(null)
const message = ref('')
const loading = ref(false)
const error = ref(null)
const success = ref(false)

function onFileChange(event) {
  file.value = event.target.files[0]
  error.value = null
  success.value = false
}

async function submitForm() {
  if (!file.value) {
    error.value = 'Selecciona una imagen'
    return
  }

  loading.value = true
  error.value = null
  success.value = false

  try {
    await uploadImageWithMessage(file.value, message.value)
    file.value = null
    message.value = ''
    success.value = 'Imagen subida correctamente, pendiente aprobación'
    // Limpia input file visualmente
    const inputFile = document.querySelector('input[type="file"]')
    if (inputFile) inputFile.value = ''
  } catch (err) {
    error.value = err.message || 'Error al subir la imagen'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="upload-form">
    <label class="form-label">
      Selecciona una imagen:
      <input type="file" @change="onFileChange" accept="image/*" class="form-input" />
    </label>

    <label class="form-label">
      Mensaje (opcional):
      <textarea
        v-model="message"
        placeholder="Escribe un mensaje..."
        class="form-textarea"
        rows="3"
      ></textarea>
    </label>

    <button type="submit" :disabled="loading" class="form-button">
      {{ loading ? 'Subiendo...' : 'Subir imagen' }}
    </button>

    <p v-if="error" class="form-error">{{ error }}</p>
    <p v-if="success" class="form-success">{{ success }}</p>
  </form>
</template>

<style scoped>
.upload-form {
  background-color: white;
  padding: 20px;
  max-width: 400px;
  margin: 2rem auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #4a3c31; /* marrón suave */
  margin-bottom: 1rem;
}

.form-input,
.form-textarea {
  margin-top: 8px;
  padding: 10px;
  border: 1.5px solid #b98b4e;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #9a733b;
  box-shadow: 0 0 5px #9a733baa;
}

.form-button {
  width: 100%;
  background-color: #b98b4e;
  color: white;
  border: none;
  padding: 12px 0;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover:not(:disabled) {
  background-color: #9a733b;
}

.form-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-error {
  margin-top: 1rem;
  color: #d43f3a;
  font-weight: 600;
  text-align: center;
}

.form-success {
  margin-top: 1rem;
  color: #2c7a2c;
  font-weight: 600;
  text-align: center;
}

/* Responsive */
@media (max-width: 480px) {
  .upload-form {
    margin: 1rem;
    padding: 15px;
  }
}
</style>

