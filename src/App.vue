<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.css"
    />
    <gif-page />
  </div>
</template>

<script>
import GifPage from './components/pages/GifPage/GifPage.vue';

export default {
  name: 'App',
  components: {
    'gif-page': GifPage,
  },
};
</script>
