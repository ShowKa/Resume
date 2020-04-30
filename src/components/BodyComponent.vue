<template>
<div class="body">
  <div class="body__row row">
    <div class="body__left col-md-4">
      <Left />
    </div>
    <div class="body__right col-md-8">
      <Right />
    </div>
  </div>
</div>
</template>
<script>
import Left from './Left.vue'
import Right from './Right.vue'
export default {
  components: {
    Left,
    Right
  }
}
</script>
<style lang="scss">
@import 'assets/app.scss';
.body {
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100%;
  &__row {
    height: 100%;
  }
  &__left {
    height: 100%;
  }
  &__right {
    height: 100%;
  }
}
</style>
