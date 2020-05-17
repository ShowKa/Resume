<template>
  <div class="right">
    <ProfessionalExperience class="right__pe" />
    <Reason class="right__reason" />
    <Skill class="right__skill" />
  </div>
</template>
<script>
import ProfessionalExperience from './ProfessionalExperience.vue'
import Reason from './Reason.vue'
import Skill from './Skill.vue'
export default {
  components: { ProfessionalExperience, Reason, Skill }
}
</script>
<style lang="scss">
@import 'assets/app.scss';
.right {
  margin-top: 11px;
  padding-left: 25px;
  &__pe {
    height: 818px;
  }
  &__reason {
    border-top: $border;
    height: $small-section_height;
  }
  &__skill {
    border-top: $border;
    height: $small-section_height;
  }
}
</style>
