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
  },
  methods: {}
}
</script>
<style lang="scss">
@import 'assets/app.scss';
.field {
    // style
    height: $width * 1.5;
    border: 1px solid #aaaaaa;
    &__body {
      height: 100%;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-left: 30px;
      padding-right: 30px;
    }
}
</style>
