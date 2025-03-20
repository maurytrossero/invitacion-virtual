<template>
    <div class="songs-list">
      <h2 class="title">Listado de Canciones</h2>
            
      <!-- Tabla de canciones -->
      <table class="songs-table">
        <thead>
          <tr>
            <th>Sugerida Por</th>
            <th>Título</th>
            <th>Artista</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cancion in canciones" :key="cancion.id">
            <td>{{ cancion.name }}</td>
            <td>{{ cancion.songTitle }}</td>
            <td>{{ cancion.artist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
  import { db } from '@/firebase';
  import { collection, onSnapshot, addDoc, QuerySnapshot, DocumentData } from 'firebase/firestore';
  
  interface Cancion {
    id: string;
    name: string;
    songTitle: string;
    artist: string;
    createdAt: any;
  }
  
  export default defineComponent({
    name: "SongsList",
    setup() {
      const canciones = ref<Cancion[]>([]);
      const newSong = ref({
        name: '',
        songTitle: '',
        artist: ''
      });
  
      let unsubscribe: () => void;
  
      const loadCanciones = () => {
        const songsCollection = collection(db, 'songs');
        unsubscribe = onSnapshot(
          songsCollection,
          (snapshot: QuerySnapshot<DocumentData>) => {
            canciones.value = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })) as Cancion[];
          },
          (error) => {
            console.error("Error al obtener canciones en tiempo real:", error);
          }
        );
      };
  
      const addSong = async () => {
        if (!newSong.value.name.trim() || !newSong.value.songTitle.trim() || !newSong.value.artist.trim()) {
          alert("Por favor, completa todos los campos.");
          return;
        }
        try {
          await addDoc(collection(db, 'songs'), {
            name: newSong.value.name,
            songTitle: newSong.value.songTitle,
            artist: newSong.value.artist,
            createdAt: new Date()
          });
          // Limpia el formulario
          newSong.value.name = '';
          newSong.value.songTitle = '';
          newSong.value.artist = '';
          alert("Canción guardada exitosamente.");
        } catch (error) {
          console.error("Error guardando la canción:", error);
          alert("Hubo un error al guardar la canción.");
        }
      };
  
      onMounted(() => {
        loadCanciones();
      });
  
      onUnmounted(() => {
        if (unsubscribe) {
          unsubscribe();
        }
      });
  
      return { canciones, newSong, addSong };
    }
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lora&display=swap');
  
  .songs-list {
    font-family: 'Lora', serif;
    background-color: #f0eae5;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
  }
  
  .title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5em;
    color: #b98b4e;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .song-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .song-input {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    font-family: 'Lora', serif;
  }
  
  .add-song-button {
    padding: 10px 20px;
    background-color: #b98b4e;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    font-family: 'Lora', serif;
    margin-top: 10px;
  }
  
  .add-song-button:hover {
    background-color: #a0873f;
  }
  
  .songs-table {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-collapse: collapse;
  }
  
  .songs-table th,
  .songs-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
    font-size: 1em;
  }
  
  .songs-table th {
    background-color: #fff;
    color: #b98b4e;
    font-family: 'Cormorant Garamond', serif;
  }
  
  .songs-table td {
    background-color: #fff;
    color: #333;
    font-family: 'Lora', serif;
  }
  
  /* Estilos Responsivos */
  @media (max-width: 768px) {
    .songs-list {
      padding: 10px;
    }
    .title {
      font-size: 2em;
    }
    .song-input {
      max-width: 100%;
      font-size: 0.9em;
    }
    .add-song-button {
      font-size: 0.9em;
    }
    .songs-table th,
    .songs-table td {
      padding: 8px;
      font-size: 0.9em;
    }
  }
  </style>
  