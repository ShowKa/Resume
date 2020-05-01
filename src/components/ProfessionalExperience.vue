<template>
  <div class="pro-ex">
    <div class="pro-ex__title">
      職務歴
    </div>
    <JobPosition
      v-for="(je, i) in $JobExperienceList"
      :key="i"
      :position="je.position"
      :company="je.company"
      :start="je.start"
      :end="je.end"
      :presentation="je.presentation"
      class="pro-ex__job-pos"
    />
  </div>
</template>

<script>
import JobPosition from './JobPosition.vue'
export default { components: { JobPosition } }
</script>

<style lang="scss">
@import 'assets/app.scss';
.pro-ex {
  &__title {
    @extend %text_chapter-title;
  }
  &__job-pos {
    margin-top: 30px;
  }
}
</style>
