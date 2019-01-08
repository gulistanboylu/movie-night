
<template>
  <div>
    <div>
      <img :src="'https://image.tmdb.org/t/p/w200' + this.movie.poster_path">
    </div>
    <div>
      <h1>{{ this.movie.title }}</h1>
      <h2>{{ this.movie.title }}</h2>
      <p>{{ this.movie.overview }}</p>
      <h3>{{this.movie.release_date}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"]
};
</script>

<style>
</style>
