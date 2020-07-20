<template>
  <div class="columns is-multiline" v-if="data">
    <div class="columns is-multiline" v-for="item in data" :key="item.id">
      <slot :gif="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTable',
  props: {
    data: {
      type: Array,
    },
  },
};
</script>
