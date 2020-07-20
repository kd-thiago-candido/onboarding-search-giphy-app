<template>
  <div>
    <gif-container></gif-container>
  </div>
</template>

<script>
import GifContainer from '../../organism/GifContainer/GifContainer.vue';

export default {
  name: 'GifPage',
  components: {
    'gif-container': GifContainer,
  },
};
</script>
