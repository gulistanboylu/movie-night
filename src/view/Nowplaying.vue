<template lang='pug'>
  div
    h1 Now Playing Movies
    div.container
      movie.item(v-for="movie in movies" :key="movie.title" :movie="movie")
</template>

<script>
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
      this.movies = await movieService.getNowplayingMovies();
    },
  },
};
</script>

<style lang="scss">
</style>
