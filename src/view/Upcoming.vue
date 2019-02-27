<template lang='pug'>
  div
    h1 Up Coming Movies
    div.container
      movie.item(v-for="movie in movies" :key="movie.title" :movie="movie")
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'babel-polyfill';
import Movie from '../components/Movie.vue';

import movieService from '../services/movie';

export default {
  components: {
    movie: Movie,
  },
  data() {
    return {
      movies: null,
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      this.movies = await movieService.getUpcomingMovies();
    },
  },
};
</script>

<style lang="scss">
</style>
