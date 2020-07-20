<template>
  <gif-list
    @customEvent="searchGifs($event)"
    :searchedGifs="searchedGifs"
    :trendingGifs="trendingGifs"
  ></gif-list>
</template>

<script>
import GifList from '../../molecules/GifList/GifList.vue';
import { getTrends, getGifsByName } from '../../../shared/api/GiphyApi';

export default {
  name: 'GifContainer',
  components: {
    'gif-list': GifList,
  },
  data() {
    return {
      searchedGifs: [],
      trendingGifs: [],
    };
  },
  methods: {
    async getGifs() {
      this.trendingGifs = await getTrends();
    },
    async searchGifs(query) {
      this.searchedGifs = await getGifsByName(query);
    },
  },
  created() {
    this.getGifs();
  },
};
</script>
