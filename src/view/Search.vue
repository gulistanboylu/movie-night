<template lang='pug'>
  div
    h1 Search Result is : {{ SEARCH_TERM }}
    div.container
      movie.item(v-for="movie in MOVIES" :key="movie.id" :movie="movie")
</template>
<script>
import { mapGetters } from 'vuex';
import Movie from '../components/Movie.vue';

export default {
  components: {
    movie: Movie,
  },
  computed: {
    ...mapGetters([
      'MOVIES',
      'SEARCH_TERM',
    ]),
  },
};
</script>
