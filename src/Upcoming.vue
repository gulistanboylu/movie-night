<template>
  <div>
    <h1>Up Coming Movies</h1>
    <div class="container">
      <movie v-for="movie in info" :key="movie.title" class="item" :movie="movie"></movie>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie.vue";
import Upcoming from "./Upcoming.vue";
const axios = require("axios");
axios.defaults.baseURL = "https://api.themoviedb.org/3";

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
    axios
      .get("/movie/upcoming", {
        params: {
          api_key: "b4fa962034248325aeb93bb096e247de"
        }
      })
      .then(response => (this.info = response.data.results));
  }
};
</script>

<style lang="scss">
</style>
