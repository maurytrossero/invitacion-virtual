<template>
    <div>
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
  /* Estilos adicionales si son necesarios */
  </style>
  