<template lang='pug'>
  div#app
    div.header
      div.logo
        img(src="src/assets/images/logo.png")
      nav
        router-link.nav-link(to='/') Home
        router-link.nav-link(to="/upcoming") Upcoming
        router-link.nav-link(to="/nowplaying") Now Playing
        router-link.nav-link(to="/toprated") Top Rated
    search
    div.app-container
      router-view
    footer
      p Copyright © 2019 Gulistan Boylu
</template>

<script>
import Upcoming from './view/Upcoming.vue';
import Toprated from './view/Toprated.vue';
import Search from './components/Searchbar.vue';
import { store } from './store/store';

export default {
  components: {
    upcoming: Upcoming,
    toprated: Toprated,
    search: Search,
  },
  store,
  name: 'app',
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

h1
h2 {
  font-weight: normal;
}

h1 {
  font-size: 1.7em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.logo {
  display: flex;
  img {
    height: 80px;
  }
}

.header {
  background-color: #000;
  display: flex;
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

footer {
  margin-top: 1em;
  background-color: #000;
  color: white;
  text-align: center;
  padding: 20px 0px;
}
</style>
