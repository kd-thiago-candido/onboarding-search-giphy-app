<template>
  <input
    type="text"
    name="query"
    @keyup="$emit('customEvent', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'AppSearchInput',
};
</script>
