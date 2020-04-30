<template>
  <div class="app full-width center-content">
    <div class="app__header" />
    <Field class="app__field" />
  </div>
</template>

<script>
import Field from './components/Field.vue'
export default {
  components: {
    Field
  }
}
</script>

<style lang="scss">
@import 'assets/app.scss';
.app {
  height: 100%;
  // elements
  &__header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: $color_primary;
  }
}
</style>
