<template>
  <div class="background-container">
    <div class="overlay">
      <div class="songs-list">
        <h2 class="title">Listado de Canciones</h2>

        <div class="table-wrapper">
          <table class="songs-table">
            <thead>
              <tr>
                <th>Sugerida Por</th>
                <th>Título</th>
                <th>Artista</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cancion in canciones" :key="cancion.id">
                <td>{{ cancion.name }}</td>
                <td>{{ cancion.songTitle }}</td>
                <td>{{ cancion.artist }}</td>
                <td>
                  <button class="action-button" @click="reproducir(cancion.youtubeId)">▶ Reproducir</button>
                  <button class="action-button" @click="pausar">⏸ Pausar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Contenedor invisible del reproductor -->
        <div id="youtube-player" style="width:0; height:0;"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* global YT */
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { db } from '@/firebase';
import { collection, onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore';

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
  var YT: any; // fallback si no está definido el tipo de YouTube Player API
}

interface Cancion {
  id: string;
  name: string;
  songTitle: string;
  artist: string;
  youtubeId: string;
  createdAt: any;
}

let player: any;

export default defineComponent({
  name: "SongsList",
  setup() {
    const canciones = ref<Cancion[]>([]);

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

    const reproducir = (youtubeId: string) => {
      if (player) {
        player.loadVideoById(youtubeId);
        player.playVideo();
      }
    };

    const pausar = () => {
      if (player) {
        player.pauseVideo();
      }
    };

    const onYouTubeIframeAPIReady = () => {
      player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '',
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
        },
      });
    };

    onMounted(() => {
      loadCanciones();

      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      } else {
        onYouTubeIframeAPIReady();
      }
    });

    onUnmounted(() => {
      if (unsubscribe) unsubscribe();
    });

    return { canciones, reproducir, pausar };
  }
});
</script>

<style scoped>
@font-face {
  font-family: 'Bahnschrift';
  src: url('@/assets/fonts/Bahnschrift.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.background-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url('https://blog.hiltoncolombia.com/hs-fs/hubfs/1%20(66).jpg?width=5568&name=1%20(66).jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.songs-list {
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  color: #f5f5f5;
  text-align: center;
  font-family: 'Bahnschrift', sans-serif;
  background: transparent; /* deja el fondo transparente para que se vea el overlay */
  backdrop-filter: none;
}

.title {
  font-size: 2rem;
  color: #f4d88a;
  margin-bottom: 1.5rem;
}

.table-wrapper {
  overflow-x: auto;
}

.songs-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
}

.songs-table th,
.songs-table td {
  padding: 1rem;
  font-size: 0.95rem;
  backdrop-filter: blur(4px);
}

.songs-table th {
  color: #f4d88a;
  font-weight: bold;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom: 2px solid #e0c693;
}

.songs-table td {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.action-button {
  font-family: 'Bahnschrift', sans-serif;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border-radius: 9999px;
  border: 1px solid #f4d88a;
  background-color: rgba(255, 255, 255, 0.1);
  color: #f4d88a;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button:hover {
  background-color: #f4d88a;
  color: black;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .songs-list {
    padding: 1rem;
    border-radius: 1rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .songs-table th,
  .songs-table td {
    padding: 0.75rem;
    font-size: 0.85rem;
  }

  .action-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
}
</style>
