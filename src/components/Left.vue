<template>
  <div class="left">
    <Name class="left__name" />
    <Picture class="left__picture" />
  </div>
</template>
<script>
import Name from './Name.vue'
import Picture from './Picture.vue'
export default {
  components: {
    Name,
    Picture
  }
}
</script>
<style lang="scss">
@import 'assets/app.scss';
.left {
  &__picture {
    margin-top: 50px;
  }
}
</style>
