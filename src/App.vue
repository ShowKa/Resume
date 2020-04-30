<template>
  <div class="app full-width center-content">
    <HeaderComponent class="app__header" />
    <Field class="app__field" />
  </div>
</template>

<script>
import Field from './components/Field.vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  components: {
    Field,
    HeaderComponent
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
    height: $header_height;
  }
}
</style>
