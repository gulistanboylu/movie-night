
import func from './vue-temp/vue-editor-bridge';
<template>
  <div>
    <div>
      <img :src="'https://image.tmdb.org/t/p/w200' + this.movie.poster_path">
    </div>
    <div class="movie-content">
      <h2>{{ this.movie.title }}</h2>
      <p>{{ truncate }}</p>
      <h4>{{this.movie.release_date}}</h4>
      <button v-on:click="detail()">More Info</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  methods: {
    detail: function() {
      alert("You will see the movie detail soon!");
    }
  },

  computed: {
    truncate: function() {
      return (
        this.movie.overview
          .split(" ")
          .splice(0, 20)
          .join(" ") + "..."
      );
    }
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 1em;
}

.item {
  background: #eaeaea;
  display: flex;
  justify-content: center;
  height: auto;
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
}

.movie-content {
  /* float: left; */
}

@supports (display: grid) {
  .item {
    margin: 0;
  }
}
</style>
