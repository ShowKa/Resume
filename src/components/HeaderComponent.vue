<template>
  <div class="header">
    <div class="header__text">
      {{ $Destination }}
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
@import 'assets/app.scss';
.header {
  background-color: $color_primary;
  display: flex;
  &__text {
    // size
    width: 100%;
    height: $header_height;
    // font
    color: $color_on-primary;
    font-family: $font-primary;
    // text position
    padding-left: 30px;
    text-align: left;
    font-size: 11px;
    line-height: $header_height;
  }
}
</style>
