<template>
  <div class="contact-section">
    <div class="contact-form">
      <h2>Contáctanos</h2>
      <form ref="contactForm" @submit.prevent="handleSubmit">
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
      <a href="https://www.facebook.com/mtproduccioneshd/" target="_blank" class="social-icon">
        <img src="https://e7.pngegg.com/pngimages/335/1001/png-clipart-social-media-facebook-computer-icons-social-network-linkedin-text-logo-internet.png" alt="Facebook">
      </a>
      <a href="https://www.instagram.com/mtproducciones.ok/" target="_blank" class="social-icon">
        <img src="https://e7.pngegg.com/pngimages/722/1011/png-clipart-logo-icon-instagram-logo-instagram-logo-purple-violet-thumbnail.png" alt="Instagram">
      </a>
      <a href="https://wa.me/3564607490?text=Hola, quisiera más información" target="_blank" class="social-icon">
        <img src="https://e7.pngegg.com/pngimages/347/373/png-clipart-computer-icons-whatsapp-whatsapp-text-trademark-thumbnail.png" alt="Whatsapp">
      </a>
      <a href="https://www.tiktok.com/@mauritrossero" target="_blank" class="social-icon">
        <img src="https://e7.pngegg.com/pngimages/449/200/png-clipart-tiktok-icon-tech-companies-thumbnail.png" alt="TikTok">
      </a>
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

const contactForm = ref(null);

const handleSubmit = () => {
  const templateParams = {
    from_name: form.value.name,
    from_email: form.value.email,
    message: form.value.message
  };

  emailjs.send('service_0r6axze', 'template_qltwbpm', templateParams, '7xvunViHmNAoSKloK')
    .then(() => {
      alert('Correo enviado con éxito!');
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      alert(`Hubo un problema al enviar el correo. Detalles: ${error.text || 'No se puede mostrar más detalles del error'}`);
    });
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  color: #ddd;
}

.contact-form {
  background: rgba(0, 0, 0, 0.75);
  padding: 40px 30px;
  border-radius: 16px;
  border: 2px solid #4A90E2;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.contact-form h2 {
  margin-bottom: 30px;
  color: #4A90E2;
  font-weight: 600;
  font-size: 2.8rem;
  text-align: center;
}

.contact-form label {
  display: block;
  margin-bottom: 8px;
  color: #81b3ff;
  font-weight: 600;
  font-size: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px 15px;
  border-radius: 10px;
  border: 1.5px solid #4A90E2;
  background: #1a1a1a;
  color: #ddd;
  font-size: 1rem;
  margin-bottom: 20px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #5a8bd8;
  font-style: italic;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #81b3ff;
  outline: none;
  box-shadow: 0 0 8px #81b3ffaa;
}

.contact-form textarea {
  resize: vertical;
  min-height: 140px;
  font-family: 'Poppins', sans-serif;
}

.contact-form button {
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  background-color: #4A90E2;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.contact-form button:hover {
  background-color: #81b3ff;
}
.social-icons {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 8px #4A90E2AA;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.15);
  box-shadow: 0 0 15px #81b3ff;
}

.social-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
@media (max-width: 768px) {
  .social-icon {
    width: 42px;
    height: 42px;
  }
}

.facebook {
  background-image: url('https://e7.pngegg.com/pngimages/335/1001/png-clipart-social-media-facebook-computer-icons-social-network-linkedin-text-logo-internet.png');
}

.whatsapp {
  background-image: url('https://e7.pngegg.com/pngimages/347/373/png-clipart-computer-icons-whatsapp-whatsapp-text-trademark-thumbnail.png');
}

.instagram {
  background-image: url('https://e7.pngegg.com/pngimages/722/1011/png-clipart-logo-icon-instagram-logo-instagram-logo-purple-violet-thumbnail.png');
}

.tiktok {
  background-image: url('https://e7.pngegg.com/pngimages/449/200/png-clipart-tiktok-icon-tech-companies-thumbnail.png');
}

@media (max-width: 768px) {
  .contact-section {
    padding: 30px 15px;
  }

  .contact-form {
    padding: 30px 20px;
  }

  .contact-form h2 {
    font-size: 2rem;
    margin-bottom: 25px;
  }

  .social-icons {
    margin-top: 30px;
    gap: 25px;
    font-size: 2.2rem;
  }

  .social-icon {
    width: 42px;
    height: 42px;
  }
}

</style>
