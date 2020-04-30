<template>
  <div class="about">
    <ul class="about__list">
      <li>
        <HomeAddress class="about__list-icon" icon-size="19px" opacity="0.5" />
        {{ $HomeAddress }}
      </li>
      <li>
        <MailAddress class="about__list-icon" icon-size="19px" opacity="0.5" />
        {{ $MailAddress }}
      </li>
      <li>
        <PhoneNumber class="about__list-icon" icon-size="19px" opacity="0.5" />
        {{ $PhoneNumber }}
      </li>
      <li>
        <Birthday class="about__list-icon" icon-size="19px" opacity="0.5" />
        {{ $Birthday }} ({{ age }})
      </li>
    </ul>
  </div>
</template>

<script>
import HomeAddress from './icon/HomeAddress.vue'
import MailAddress from './icon/MailAddress.vue'
import PhoneNumber from './icon/PhoneNumber.vue'
import Birthday from './icon/Birthday.vue'
export default {
  components: {
    HomeAddress,
    MailAddress,
    PhoneNumber,
    Birthday
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
  // var
  $list_height: 19px;
  // padding-top: 30px;
  // style
  // elements
  &__list {
    padding: 0;
    list-style-type: none;
    li {
      margin-bottom: 20px;
      height: $list_height;
    }
  }
  &__list-icon {
    margin-right: 10px;
  }
}
</style>
