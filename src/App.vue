<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <a href>
          <img src="src/assets/images/logo.png" alt>
        </a>
        <nav>
          <a href>Up Coming</a>
          <a href>Now Playing</a>
          <a href>Top Rated</a>
        </nav>
      </div>
    </div>
    <div class="app-container">
      <upcoming></upcoming>
      <!-- <div class="container">
        <movie v-for="movie in info" :key="movie.title" class="item" :movie="movie"></movie>
      </div>-->
    </div>
  </div>
</template>

<script>
import Upcoming from "./Upcoming.vue";

export default {
  components: {
    upcoming: Upcoming
  },
  name: "app"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900");
#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0;
}

body {
  margin: 0;
}

.app-container {
  margin: 0 auto;
  max-width: 80em;
  padding: 2em;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.logo {
  display: flex;
  img {
    height: 80px;
  }
}

.header {
  background-color: #000;
}

nav {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  a {
    color: white;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 30px;
    transition: color 0.4s linear;
    &:hover {
      color: #ed635d;
    }
  }
}
</style>
