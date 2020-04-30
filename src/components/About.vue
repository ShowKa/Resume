<template>
  <div class="about">
    <ul class="about__list">
      <li>
        <Job class="about__list-icon" icon-size="19px" opacity="0.3" />
        {{ $Job }}
      </li>
      <li>
        <Birthday class="about__list-icon" icon-size="19px" opacity="0.3" />
        {{ $Birthday }} ({{ age }})
      </li>
      <li>
        <PhoneNumber class="about__list-icon" icon-size="19px" opacity="0.3" />
        {{ $PhoneNumber }}
      </li>
      <li>
        <MailAddress class="about__list-icon" icon-size="19px" opacity="0.3" />
        {{ $MailAddress }}
      </li>
      <li>
        <HomeAddress class="about__list-icon" icon-size="19px" opacity="0.3" />
        {{ $HomeAddress }}
      </li>
    </ul>
  </div>
</template>

<script>
import HomeAddress from './icon/HomeAddress.vue'
import MailAddress from './icon/MailAddress.vue'
import PhoneNumber from './icon/PhoneNumber.vue'
import Birthday from './icon/Birthday.vue'
import Job from './icon/Job.vue'
export default {
  components: {
    HomeAddress,
    MailAddress,
    PhoneNumber,
    Birthday,
    Job
  },
  computed: {
    age() {
      return _calculateAge(this.$Birthday)
    }
  }
}
function _calculateAge(yyyyMMdd) {
  const birthday = new Date(yyyyMMdd)
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
</script>

<style lang="scss">
@import 'assets/app.scss';
.about {
  @extend %text_short;
  // elements
  &__list {
    padding: 0;
    list-style-type: none;
    li {
      margin-bottom: 20px;
      height: 19px;
    }
  }
  &__list-icon {
    margin-right: 10px;
  }
}
</style>
