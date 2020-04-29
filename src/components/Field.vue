<template>
<div class="field container">
  <div class="field__header row">
    <div class="col-md-12">
      <HeaderComponent />
    </div>
  </div>
  <div class="field__body row">
    <div class="col">
      <BodyComponent />
    </div>
  </div>
</div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue'
import BodyComponent from './BodyComponent.vue'
export default {
  components: {
    BodyComponent,
    HeaderComponent
  },
  methods: {}
}
</script>
<style lang="scss">
@import 'assets/app.scss';
.field {
    height: $width * 1.5;
    border: 1px solid #222222;
}
</style>
