<template>
  <div class="right">
    <ProfessionalExperience class="right__pe" />
    <Reason class="right__reason" />
  </div>
</template>
<script>
import ProfessionalExperience from './ProfessionalExperience.vue'
import Reason from './Reason.vue'
export default {
  components: { ProfessionalExperience, Reason }
}
</script>
<style lang="scss">
@import 'assets/app.scss';
.right {
  margin-top: 11px;
  padding-left: 25px;
  &__pe {
    height: 773px;
  }
  &__reason {
    border-top: $border;
  }
}
</style>
