<template>
    <div>
      <p>Autorización en curso...</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  onMounted(async () => {
    const code = route.query.code as string;
  
    if (code) {
      try {
        console.log('Código recibido:', code); // Verifica que se recibe el código de autorización
  
        const response = await axios.post('https://api.instagram.com/oauth/access_token', {
          client_id: '1246190323410382',
          client_secret: 'b0c222b5f2e29a493a573709a3423470',
          grant_type: 'authorization_code',
          redirect_uri: 'https://invitacion-virtual-beige.vercel.app/auth/instagram/callback',
          code: code
        });
  
        console.log('Respuesta de la API de Instagram:', response.data); // Verifica la respuesta de la API
  
        const { access_token, user_id } = response.data;
        console.log('Token de acceso:', access_token);  // Verifica que el token se obtiene correctamente
        console.log('User ID:', user_id);  // Verifica que el user_id se obtiene correctamente
  
        localStorage.setItem('instagram_access_token', access_token);
        localStorage.setItem('instagram_user_id', user_id);
  
        console.log('Token guardado en localStorage:', localStorage.getItem('instagram_access_token'));
        console.log('User ID guardado en localStorage:', localStorage.getItem('instagram_user_id'));
  
        router.push('/');
      } catch (error) {
        console.error('Error al obtener el token de acceso:', error);
      }
    }
  });
  </script>
  