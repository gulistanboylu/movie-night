<template lang='pug'>
   transition(name="modal-fade")
     div.modal-backdrop
       div.modal
         header.modal-header
           slot(name="header") This will be the Movie
         section.modal-body
           slot(name="body") I'm the default body!
         footer.modal-footer
           button.btn-close(type="button" @click="close") Close
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 600px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  text-transform: capitalize;
  font-weight: 600;
  color: #2c3e50;
  justify-content: space-between;
  h2 {
    margin: 0;
    font-weight: 600;
  }
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  .movie-detail-text {
    padding: 0px 10px;
    margin: 0;
  }
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
