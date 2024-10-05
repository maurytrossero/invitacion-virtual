<template>
    <div v-if="isFooterVisible" class="footer-music">
      <div class="controls">
        <button @click="rewind" class="control-btn">⏪</button>
        <button @click="togglePlayPause" class="control-btn">
          {{ isPlaying ? '⏸' : '▶️' }}
        </button>
        <button @click="forward" class="control-btn">⏩</button>
        <input
          type="range"
          v-model="volume"
          @input="adjustVolume"
          min="0"
          max="100"
          class="volume-slider"
        />
      </div>
      <div class="playback-info">
        <span>{{ currentTime }} / {{ totalTime }}</span>
        <input
          type="range"
          v-model="playbackPosition"
          @input="seek"
          min="0"
          :max="duration"
          class="playback-slider"
        />
      </div>
      <div class="youtube-player" ref="youtubePlayer" style="display: none;"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, getCurrentInstance, computed } from 'vue';
  
  const isPlaying = ref(false);
  const player = ref(null);
  const volume = ref(50); // Volumen inicial al 50%
  const duration = ref(0); // Duración total del video
  const playbackPosition = ref(0); // Posición actual de reproducción
  const currentTime = computed(() => formatTime(playbackPosition.value)); // Tiempo actual
  const totalTime = computed(() => formatTime(duration.value)); // Tiempo total
  const isFooterVisible = ref(true); // Controla la visibilidad del footer
  const { proxy } = getCurrentInstance(); // Obtener el contexto del componente
  
  onMounted(() => {
    // Cargar el API de YouTube de manera asíncrona
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);
  
    // Inicializar el reproductor de YouTube cuando el API esté lista
    window.onYouTubeIframeAPIReady = () => {
      player.value = new window.YT.Player(proxy.$refs.youtubePlayer, {
        videoId: 'OZk3Lit_KfU', // ID del video de YouTube
        playerVars: { 'playsinline': 1, 'showinfo': 0, 'controls': 0 }, // Deshabilitar controles en el video
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    }
  });
  
  const onPlayerReady = (event) => {
    event.target.setVolume(volume.value);
  }
  
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      updatePlaybackPosition();
    }
  }
  
  // Alternar entre reproducir y pausar
  const togglePlayPause = () => {
    if (player.value) {
      if (isPlaying.value) {
        player.value.pauseVideo();
      } else {
        player.value.playVideo();
      }
      isPlaying.value = !isPlaying.value;
    } else {
      console.log("El reproductor no está listo.");
    }
  }
  
  // Rebobinar 10 segundos
  const rewind = () => {
    if (player.value) {
      const currentTime = player.value.getCurrentTime();
      player.value.seekTo(currentTime - 10);
    }
  }
  
  // Adelantar 10 segundos
  const forward = () => {
    if (player.value) {
      const currentTime = player.value.getCurrentTime();
      player.value.seekTo(currentTime + 10);
    }
  }
  
  // Ajustar el volumen
  const adjustVolume = () => {
    if (player.value) {
      player.value.setVolume(volume.value);
    }
  }
  
  // Actualizar la posición de reproducción
  const updatePlaybackPosition = () => {
    if (player.value) {
      const currentTime = player.value.getCurrentTime();
      playbackPosition.value = currentTime;
      duration.value = player.value.getDuration(); // Obtener la duración total del video
    }
  }
  
  // Ir a una posición específica
  const seek = () => {
    if (player.value) {
      player.value.seekTo(playbackPosition.value);
    }
  }
  
  // Formato del tiempo (mm:ss)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  
  // Actualizar la posición de reproducción cada segundo
  setInterval(updatePlaybackPosition, 1000);
  </script>
  
  <style scoped>
  .footer-music {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 10px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Asegúrate de que ocupe todo el ancho */
  }
  
  .control-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px; /* Tamaño de fuente reducido para móvil */
    margin: 0 10px;
    cursor: pointer;
    outline: none;
  }
  
  .control-btn:hover {
    color: #ff9800;
  }
  
  .volume-slider {
    width: 80px; /* Ajustado para móvil */
    margin-left: 20px;
  }
  
  .playback-info {
    display: flex;
    align-items: center;
  }
  
  .playback-slider {
    width: 150px; /* Ajustado para móvil */
    margin-left: 10px;
  }
  
  .youtube-player {
    display: none; /* Asegúrate de que el reproductor de video no ocupe espacio */
  }
  
  @media (max-width: 768px) {
    .controls {
      justify-content: space-around; /* Asegúrate de que los botones se distribuyan uniformemente */
    }
    .control-btn {
      font-size: 18px; /* Tamaño de fuente adicionalmente reducido para móvil */
    }
  }
  </style>
