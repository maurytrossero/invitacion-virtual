<template>
    <div class="main-container">
      <CountdownComponent />
      <EventLocation />
    </div>
  </template>
  
  <script>
  import CountdownComponent from '@/components/birthday/CountdownComponent.vue';
  import EventLocation from '@/components/birthday/EventLocation.vue';
  
  export default {
    components: {
      CountdownComponent,
      EventLocation
    }
  };
  </script>
  
  <style scoped>
  .main-container {
    width: 100%;
    overflow-x: hidden;
  }
  </style>
  