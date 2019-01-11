<template>
  <div>
    <div>
      <img :src="'https://image.tmdb.org/t/p/w200' + this.movie.poster_path">
    </div>
    <div class="movie-content">
      <h3>{{ this.movie.title }}</h3>
      <p>{{ truncate }}</p>
      <h4>{{this.movie.release_date}}</h4>
      <button type="button" class="btn" @click="showModal">More Info</button>
      <modal v-show="isModalVisible" @close="closeModal">
        <div slot="header">
          <h2>{{ movie.title}}</h2>
        </div>
        <div slot="body" class="movie-details">
          <img :src="'https://image.tmdb.org/t/p/w200' + this.movie.poster_path">
          <div class="movie-detail-text">
            <p>
              <strong>Overview:</strong>
              {{ movie.overview}}
            </p>
            <p>
              <strong>Popularity:</strong>
              {{ movie.popularity}}
            </p>
            <p>
              <strong>Release Date:</strong>
              {{ movie.release_date}}
            </p>
            <p>
              <strong>Language:</strong>
              {{ movie.original_language }}
            </p>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    modal: Modal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  props: ["movie"],
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
  grid-gap: 3em;
}

h1 {
  color: black;
  font-weight: 600;
  margin: 1em 0 1.5em 0;
}

.item {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1 1 200px;
  height: auto;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
}

.movie-content {
  padding: 0 1.5em;
}
.movie-details {
  display: flex;
}
h4 {
  color: #868686;
  margin: 2em 0;
}

button {
  background-color: #ed635d;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.9em;
  letter-spacing: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  padding: 8px 20px;
  transition: color 0.4s linear;
}

@supports (display: grid) {
  .item {
    margin: 0;
  }
}
</style>
