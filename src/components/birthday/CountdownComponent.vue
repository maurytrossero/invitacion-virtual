<template>
  <div class="countdown-container">
    <div class="overlay"></div>
    <div class="content">
      <h1 class="name">Andrea Giron</h1>
      <!-- Separador espejado horizontalmente -->
       
      <div class="separator"></div>
      <h2 class="subtitle">Mis 50 años</h2>
      <div class="separator"></div>

      <div class="countdown">
        <div v-for="(unit, index) in timeUnits" :key="index" class="time-box">
          <transition name="fade" mode="out-in">
            <span :key="unit.value" class="time-value">{{ unit.value }}</span>
          </transition>
          <span class="time-label">{{ unit.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: 26,
      month: 4, 
      year: 2025,
      hour: 0,
      minute: 0,
      second: 0,
      timeLeft: {}
    };
  },
  computed: {
    timeUnits() {
      return [
        { label: 'Días', value: this.timeLeft.days },
        { label: 'Horas', value: this.timeLeft.hours },
        { label: 'Minutos', value: this.timeLeft.minutes },
        { label: 'Segundos', value: this.timeLeft.seconds }
      ];
    }
  },
  methods: {
    updateCountdown() {
      const targetDate = new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second).getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      this.timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    }
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Lora:wght@500&display=swap');

.countdown-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('https://www.malavitanightbar.com/wp-content/uploads/2022/02/50-cumpleanos.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.content {
  position: relative;
  color: white;
  z-index: 2;
}

.name {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-style: italic;
  font-weight: bold;
}

.separator {
  width: 60%;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.6) 100%);
  margin: 20px auto;
}

.subtitle {
  font-family: 'Lora', serif;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
}

.time-value {
  font-family: 'Lora', serif;
  font-size: 4rem;
  font-weight: bold;
  transition: opacity 0.5s ease-in-out;
}

.time-label {
  font-size: 1.2rem;
  font-family: 'Lora', serif;
}

@media (max-width: 768px) {
  .name { 
    font-size: 2.5rem; 
  }
  .subtitle { 
    font-size: 2rem; 
  }
  .time-box { 
    font-size: 1.5rem; 
    gap: 10px; /* Ajusté el espaciado entre las cajas */
  }
  .time-value { 
    font-size: 3rem; 
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .name {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.8rem;
  }
  .time-box {
    font-size: 1.2rem;
    gap: 8px; /* Ajusté el espaciado entre las cajas para pantallas horizontales */
  }
  .time-value {
    font-size: 2.5rem;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
