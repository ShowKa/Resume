<template>
  <div class="education">
    <div class="education__title">
      学習歴
    </div>
    <div class="education__ul">
      <School
        v-for="(school, i) in $SchoolList"
        :key="'school_' + i"
        class="education__li"
        :name="school.name"
        :major="school.major"
        :entry="school.entry"
        :graduate="school.graduate"
      />
    </div>
  </div>
</template>

<script>
import School from './School.vue'
export default {
  components: {
    School
  }
}
</script>

<style lang="scss">
@import 'assets/app.scss';
.education {
  &__title {
    @extend %text_chapter-title;
  }
  &__ul {
    margin-top: 30px;
  }
  &__li {
    margin-top: 15px;
  }
}
</style>
