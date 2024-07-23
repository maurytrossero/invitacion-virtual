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
  
        const { access_token, user_id } = response.data;
        console.log('Token de acceso recibido:', access_token);  // Verifica que el token se obtiene correctamente
        console.log('User ID recibido:', user_id);  // Verifica que el user_id se obtiene correctamente
  
        // Guarda el token y el user ID en localStorage
        localStorage.setItem('instagram_access_token', access_token);
        localStorage.setItem('instagram_user_id', user_id);
  
        // Verifica que se han guardado correctamente
        console.log('Token guardado en localStorage:', localStorage.getItem('instagram_access_token'));
        console.log('User ID guardado en localStorage:', localStorage.getItem('instagram_user_id'));
  
        // Redirecciona a la página de inicio
        console.log('Redireccionando a la página de inicio...');
        router.push('/');
      } catch (error) {
        console.error('Error al obtener el token de acceso:', error);
      }
    }
  });
  </script>
  