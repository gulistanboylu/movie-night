<template lang='pug'>
  div.search
    input(v-model="message" placeholder="Seach for movie")
    p {{ message }}
</template>

<script>
export default {

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
