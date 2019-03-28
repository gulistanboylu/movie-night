<template lang='pug'>
  div
    h1 Now Playing Movies
    div.container
      movie.item(v-for="movie in movies" :key="movie.id" :movie="movie")
    div.wrapper
      button.btn(type="button" @click="More" class="more") More Movie
</template>

<script>
import Movie from '../components/Movie.vue';

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
    this.$store.dispatch('nowPlayingMovies');
  },
  computed: {
    movies() {
      return this.$store.state.movieList;
    },
  },
  methods: {
    More() {
      const page = this.$store.state.page + 1;
      this.$store.commit('SET_PAGE', page);
      this.$store.dispatch('nowPlayingMovies');
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
