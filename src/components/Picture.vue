<template>
  <div class="picture">
    <img src="static/img/face.png" class="picture__img" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'assets/app.scss';
.picture {
  &__img {
    height: 250px;
    clip-path: circle(95px at center);
  }
}
</style>
