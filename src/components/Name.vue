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
    font-family: $font-secondary;
    font-size: 71px;
    font-weight: 100;
    letter-spacing: -7px;
  }
  &__name-alphabet {
    color: $color-primary;
    font-weight: 300;
    letter-spacing: 15px;
    font-size: 16px;
  }
}
</style>
