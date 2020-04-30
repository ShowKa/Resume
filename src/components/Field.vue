<template>
  <div class="field container">
    <div class="field__body row">
      <div class="col">
        <BodyComponent />
      </div>
    </div>
  </div>
</template>
<script>
import BodyComponent from './BodyComponent.vue'
export default {
  components: {
    BodyComponent
  }
}
</script>
<style lang="scss">
@import 'assets/app.scss';
.field {
  // container
  height: 100%;
  background-color: $color_background;
  // text
  color: $color_on-background;
  font-family: $font-primary;
  &__body {
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
