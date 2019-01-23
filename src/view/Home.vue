<template lang="pug">
  div.home
    h1 Top rated movies
    div.container
      movie.item(v-for="(movie,index) in topratedMovies"
      :key="movie.title" :movie="movie" v-if="index < 4")
      router-link.more(to="/toprated") Discover More
    h1 Up coming movies
    div.container
      movie.item(v-for="(movie, index) in upcomingMovies"
      :key="movie.title" :movie="movie" v-if="index < 2")
      router-link.more(to="/upcoming") Discover More
    h1 Now playing movies
    div.container
      movie.item(v-for="(movie, index) in nowplayingMovies"
      key="movie.title" :movie="movie" v-if="index < 2")
      router-link.more(to="/nowplaying") Discover More
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
      topratedMovies: null,
      upcomingMovies: null,
      nowplayingMovies: null,
    };
  },
  mounted() {
    this.topRatedMovies();
    this.upComingMovies();
    this.nowPlayingMovies();
  },
  methods: {
    async topRatedMovies() {
      this.topratedMovies = await movieService.getTopratedMovies();
    },
    async upComingMovies() {
      this.upcomingMovies = await movieService.getUpcomingMovies();
    },
    async nowPlayingMovies() {
      this.nowplayingMovies = await movieService.getNowplayingMovies();
    },
  },
};
</script>

<style lang="scss">
.more {
  background-color: black;
  color: white;
  font-size: 0.9em;
  grid-column-start: 2;
  justify-self: flex-end;
  letter-spacing: 0.1em;
  padding: 8px 0;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  width: 11em;
}
</style>
