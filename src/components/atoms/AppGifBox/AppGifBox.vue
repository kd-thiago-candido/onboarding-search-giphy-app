<template>
  <div class="gif-box">
    <a :href="gif.url">
      <img class="gif-image" :src="gif.images.original.url" />
    </a>
    <a class="gif-user" v-if="gif.user" :href="gif.user.profile_url">
      <img :src="gif.user.avatar_url" height="30" width="30" />
      {{ gif.user.display_name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppGifBox',
  props: {
    gif: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.gif-box {
  position: relative;
  background: #333;
}

.gif-user {
  display: flex;
  align-items: center;
  position: absolute;
  left: 15px;
  bottom: 15px;
}

.gif-user img {
  margin-right: 8px;
}
</style>
