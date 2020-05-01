<template>
  <div class="reason">
    <div class="reason__title">
      志望動機
    </div>
    <div class="reason__text">
      {{ $Reason }}
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'assets/app.scss';
.reason {
  &__title {
    @extend %text_chapter-title;
    margin-top: 30px;
  }
  &__text {
    margin-top: 20px;
    @extend %text_long;
  }
}
</style>
