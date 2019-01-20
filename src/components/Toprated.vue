<template lang='pug'>
  div
    h1 Top Rated Movies
    div.container
      movie.item(v-for="movie in info" :key="movie.title" :movie="movie")
</template>

<script>
import Movie from "./Movie.vue";
import Upcoming from "./Upcoming.vue";
import movieService from "../services/movie.js";

export default {
  components: {
    movie: Movie
  },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      this.info = await movieService.getTopratedMovies();
    }
  }
};
</script>

<style lang="scss">
</style>
