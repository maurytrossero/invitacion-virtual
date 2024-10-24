<template>
  <div v-if="isFooterVisible" class="footer-music">
    <button @click="togglePlayPause" class="control-btn">
      <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
    </button>
    <button @click="toggleMute" class="control-btn">
      <i :class="isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'"></i>
    </button>
    <div class="youtube-player" id="youtubePlayer" style="display: none;"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isPlaying = ref(false);
const isMuted = ref(false);
const player = ref(null);
const isFooterVisible = true; // Define esto según sea necesario

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://www.youtube.com/iframe_api';
  document.body.appendChild(script);

  window.onYouTubeIframeAPIReady = () => {
    player.value = new window.YT.Player('youtubePlayer', {
      videoId: 'DzzSFG-M-eg',
      playerVars: { 'playsinline': 1, 'showinfo': 0, 'controls': 0 },
      events: {
        onReady: onPlayerReady,
      },
    });
  };
});

const onPlayerReady = () => {
  playVideo(); // Iniciar la reproducción automáticamente
};

const playVideo = () => {
  if (player.value && !isPlaying.value) {
    player.value.playVideo();
    isPlaying.value = true;
  }
};

const togglePlayPause = () => {
  if (player.value) {
    if (isPlaying.value) {
      player.value.pauseVideo();
    } else {
      playVideo();
    }
    isPlaying.value = !isPlaying.value;
  }
};

const toggleMute = () => {
  if (player.value) {
    isMuted.value = !isMuted.value;
    isMuted.value ? player.value.mute() : player.value.unMute();
  }
};
</script>

<style scoped>
.footer-music {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;
  padding: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.control-btn {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0 15px;
  color: #fff; /* Asegura que los iconos sean blancos */
  font-size: 24px; /* Tamaño del icono */
}

.control-btn:hover {
  opacity: 0.8; /* Efecto hover */
}

@media (max-width: 768px) {
  .control-btn {
    font-size: 20px; /* Tamaño del icono en dispositivos móviles */
  }
}
</style>
