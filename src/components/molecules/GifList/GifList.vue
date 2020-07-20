<template>
  <div>
    <h2 class="title">Search</h2>
    <app-search-input @customEvent="$emit('customEvent', $event)">
    </app-search-input>
    <app-table :data="searchedGifs" v-slot="{ gif }">
      <app-gif-box :gif="gif" />
    </app-table>

    <h2 class="title">Trending</h2>
    <app-table :data="trendingGifs" v-slot="{ gif }">
      <app-gif-box :gif="gif" />
    </app-table>
  </div>
</template>

<script>
import AppSearchInput from '../../atoms/AppSearchInput/AppSearchInput.vue';
import AppTable from '../../atoms/AppTable/AppTable.vue';
import AppGifBox from '../../atoms/AppGifBox/AppGifBox.vue';

export default {
  name: 'GifList',
  props: ['searchHandle', 'searchedGifs', 'trendingGifs'],
  components: {
    'app-search-input': AppSearchInput,
    'app-table': AppTable,
    'app-gif-box': AppGifBox,
  },
};
</script>
