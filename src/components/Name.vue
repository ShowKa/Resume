<template>
  <div class="name">
    <div class="name__full-name">
      {{ $FamilyName }}
      {{ $FirstName }}
    </div>
    <div class="name__name-alphabet">
      {{ $NameAlphabet }}
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import 'assets/app.scss';
.name {
  &__full-name {
    font-size: 71px;
    font-family: $font-primary;
    font-weight: 100;
    letter-spacing: -7px;
  }
  &__name-alphabet {
    color: $color-primary;
    letter-spacing: 15px;
  }
}
</style>
