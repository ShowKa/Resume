<template>
  <div class="left">
    <Name class="left__name" />
    <Picture class="left__picture" />
    <Profile class="left__profile" />
    <About class="left__about" />
    <Education class="left__education" />
  </div>
</template>
<script>
import Name from './Name.vue'
import Picture from './Picture.vue'
import Profile from './Profile.vue'
import About from './About.vue'
import Education from './Education.vue'
export default {
  components: {
    Name,
    Picture,
    Profile,
    About,
    Education
  }
}
</script>
<style lang="scss">
@import 'assets/app.scss';
.left {
  // var
  $small-section_height: 300px;
  %small-section_margin {
    border-top: 1px solid $color_on-background_light;
    height: $small-section_height;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  // elements
  &__picture {
    margin-top: 50px;
    margin-left: 40px;
  }
  &__profile {
    @extend %small-section_margin;
    margin-top: 30px;
  }
  &__about {
    @extend %small-section_margin;
  }
  &__education {
    @extend %small-section_margin;
  }
}
</style>
