<template>
    <div class="main-container">
      <CountdownComponent />
      <EventLocation />
      <PaymentComponent />
      <MusicSuggestion />

    </div>
  </template>
  
  <script>
  import CountdownComponent from '@/components/birthday/CountdownComponent.vue';
  import EventLocation from '@/components/birthday/EventLocation.vue';
  import MusicSuggestion from '@/components/birthday/MusicSuggestion.vue';
  import PaymentComponent from '@/components/birthday/PaymentComponent.vue';

  
  export default {
    components: {
      CountdownComponent,
      EventLocation,
      PaymentComponent,
      MusicSuggestion
    }
  };
  </script>
  
  <style scoped>
  .main-container {
    width: 100%;
    overflow-x: hidden;
  }
  </style>
  