<template lang='pug'>
  div.search
    input(v-model.lazy="message" placeholder="Seach for movie" v-on:keyup.enter="changed")
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    ...mapActions(['search']),
    changed(event) {
      this.search(event.target.value);
      // this.$store.dispatch('search', event.target.value);
      this.$router.push('search');
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
