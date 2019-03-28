<template lang='pug'>
  div.search
    input(placeholder="Seach for movie" v-on:keyup.enter="searchMovies" v-model="searchTerm")
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    ...mapActions(['search']),
    searchMovies(event) {
      this.search(event.target.value);
      this.$router.push('search');
      this.searchTerm = '';
      this.$store.commit('RESET_STATE');
    },
  },
};
</script>

<style lang='scss'>
    input {
        width: 100%;
        padding: 20px 30px;
        text-transform: uppercase;
        font-style: italic;
        color: grey;
        font-size: 1em;
        border:#d1d1d1 2px solid;
    }
</style>
