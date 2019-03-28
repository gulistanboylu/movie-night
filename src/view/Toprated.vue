<template lang='pug'>
  div
    h1 Top Rated Movies
    div.container
      movie.item(v-for="movie in movies" :key="movie.title" :movie="movie")
    div.wrapper
      button.btn(type="button" @click="More" class="more") More Movie
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
    };
  },
  mounted() {
    this.$store.commit('RESET_STATE');
    this.$store.dispatch('topRatedMovies');
  },
  computed: {
    movies() {
      return this.$store.state.movieList;
    },
  },
  methods: {
    async getMovies(page) {
      this.movies = await movieService.getTopratedMovies(page);
    },
    More() {
      const page = this.$store.state.page + 1;
      this.$store.commit('SET_PAGE', page);
      this.$store.dispatch('topRatedMovies');
      this.getMovies(page);
    },
  },
};
</script>

<style lang="scss">
  .more {
    background: white;
    color: #ed635d;
    text-align: center;
    margin: 50px 0 0 0;
    border: none;
    text-decoration: underline;
    &:hover {
      color: black;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
