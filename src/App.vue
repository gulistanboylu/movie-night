<template>
  <div id="app">
    <div class="content">
      <div class="logo-container">
        <a href="">
          <img src="src/assets/images/logo.png" alt="">
        </a>
        <nav>
          <a href="">Up Coming</a>
          <a href="">Now Playing</a>
          <a href="">Top Rated</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
body {
  margin: 0;
}
h1, h2 {
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
.logo-container {
    display: flex;
    img {
      height: 80px;
    }
  }
  .content {
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
      transition: color .4s linear;
      &:hover {
        color: #ed635d;
      }
    }
  }
</style>
