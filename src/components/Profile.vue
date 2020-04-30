<template>
  <div class="profile">
    <div class="profile__text">
      {{ $Profile }}
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'assets/app.scss';
.profile {
  &__text {
    @extend %text_long;
    text-overflow: ellipsis;
  }
}
</style>
