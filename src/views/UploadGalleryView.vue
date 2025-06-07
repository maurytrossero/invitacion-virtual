<template>
  <div class="page-background">
    <div class="upload-gallery">
      <h2 class="title">Subí tu foto 💌</h2>

      <form @submit.prevent="handleUpload" class="form">
        <input
        type="file"
        @change="handleFileChange"
        accept="image/*"
        required
        class="input-file"
        />


        <p v-if="file" class="filename">📸 Archivo: {{ file.name }}</p>

        <textarea
          v-model="message"
          placeholder="Mensaje opcional"
          class="textarea"
          rows="3"
        ></textarea>

        <button
          type="submit"
          :disabled="uploading || !file"
          class="btn-submit"
        >
          {{ uploading ? 'Subiendo...' : 'Enviar' }}
        </button>

        <p v-if="success" class="msg-success">¡Imagen enviada con éxito!</p>
        <p v-if="error" class="msg-error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { uploadImageWithMessage } from '@/services/galleryService'

const file = ref<File | null>(null)
const message = ref('')
const uploading = ref(false)
const success = ref(false)
const error = ref('')

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    file.value = target.files[0]
    success.value = false
    error.value = ''
    console.log('📂 Archivo seleccionado:', file.value)
  } else {
    error.value = 'No se seleccionó ningún archivo'
  }
}

async function handleUpload() {
  if (!file.value) return

  uploading.value = true
  success.value = false
  error.value = ''

  try {
    await uploadImageWithMessage(file.value, message.value)
    success.value = true
    file.value = null
    message.value = ''
    ;(document.querySelector('input[type="file"]') as HTMLInputElement).value = ''
  } catch (e) {
    error.value =
      e instanceof Error ? e.message : 'Error al subir la imagen. Intenta nuevamente.'
  } finally {
    uploading.value = false
  }
}
</script>

<style scoped>
.page-background {
  min-height: 100vh;
  background-color: #fffafc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.upload-gallery {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(185, 139, 78, 0.3);
  max-width: 400px;
  padding: 2rem 1.5rem;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #b98b4e;
  margin-bottom: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.input-file {
  border: 1.5px solid #b98b4e;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
}

.input-file:focus {
  outline: none;
  border-color: #9a733b;
  box-shadow: 0 0 5px #9a733baa;
}

.textarea {
  border: 1.5px solid #b98b4e;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 1rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.textarea:focus {
  outline: none;
  border-color: #9a733b;
  box-shadow: 0 0 5px #9a733baa;
}

.btn-submit {
  background-color: #b98b4e;
  color: white;
  font-weight: 700;
  padding: 0.75rem 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.btn-submit:hover:not(:disabled) {
  background-color: #9a733b;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.msg-success {
  color: #2c7a2c;
  font-weight: 600;
  margin-top: 0.5rem;
}

.msg-error {
  color: #d43f3a;
  font-weight: 600;
  margin-top: 0.5rem;
}

.filename {
  font-size: 0.9rem;
  color: #555;
}
</style>
