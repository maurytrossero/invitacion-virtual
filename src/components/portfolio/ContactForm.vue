<template>
  <div class="contact-section">
    <div class="contact-form">
      <h2>Contacta con nosotros</h2>
      <form @submit.prevent="handleSubmit">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" required />

        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="form.email" required />

        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="form.message" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>

    <div class="social-icons">
      <a href="https://www.facebook.com/mtproduccioneshd/" target="_blank" class="facebook-button"></a>
      <a href="https://www.instagram.com/mtproducciones.ok/" target="_blank" class="instagram-button"></a>
      <a href="https://wa.me/3564607490?text=Hola, quisiera más información" target="_blank" class="whatsapp-button"></a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  emailjs.sendForm('service_0r6axze', 'template_5mpp0ed', form.value, '7xvunViHmNAoSKloK')
    .then(() => {
      alert('Correo enviado con éxito!');
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
    });
};
</script>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f7f7f7;
  min-height: 100vh;
  box-sizing: border-box;
}

.contact-form {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.contact-form h2 {
  margin-bottom: 20px;
  color: #333;
}

.contact-form label {
  display: block;
  margin: 10px 0 5px;
  color: #555;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.contact-form textarea {
  resize: vertical; /* Permite redimensionar solo en la dirección vertical */
}

.contact-form button {
  width: 100%;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
}

.contact-form button:hover {
  background-color: #0056b3;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 2rem;
  margin-top: auto; /* Asegura que los íconos se mantengan en la parte inferior */
}

.social-icons a {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
}

.facebook-button {
  background-image: url('https://e7.pngegg.com/pngimages/335/1001/png-clipart-social-media-facebook-computer-icons-social-network-linkedin-text-logo-internet.png');
}

.whatsapp-button {
  background-image: url('https://e7.pngegg.com/pngimages/347/373/png-clipart-computer-icons-whatsapp-whatsapp-text-trademark-thumbnail.png');
}

.instagram-button {
  background-image: url('https://e7.pngegg.com/pngimages/722/1011/png-clipart-logo-icon-instagram-logo-instagram-logo-purple-violet-thumbnail.png');
}

@media (max-width: 768px) {
  .contact-section {
    padding: 20px;
    justify-content: space-between;
  }

  .contact-form {
    padding: 20px;
    margin-bottom: 0;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 8px;
  }

  .contact-form button {
    padding: 10px;
  }
}
</style>
