<template lang='pug'>
  div
    h1 Up Coming Movies
    div.container
      movie.item(v-for="movie in info" :key="movie.title" :movie="movie")
</template>

<script>
import Movie from "../components/Movie.vue";
import Upcoming from "./Upcoming.vue";
import movieService from "../services/movie.js";

export default {
  components: {
    movie: Movie,
    upcoming: Upcoming
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
      this.info = await movieService.getUpcomingMovies();
    }
  }
};
</script>

<style lang="scss">
</style>
