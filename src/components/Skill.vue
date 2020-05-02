<template>
  <div class="skill">
    <div class="skill__title">
      技術
    </div>
    <div class="skill__block">
      <div class="skill__title__sub">
        プロフェッショナル
      </div>
      <ul class="skill__list">
        <li v-for="(item, i) in $SkillList" :key="'SkillList_' + i">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="skill__block skill__block__not-first">
      <div class="skill__title__sub">
        資格
      </div>
      <ul class="skill__list">
        <li v-for="(item, i) in $QualificationList" :key="'Quolification_' + i">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'assets/app.scss';
.skill {
  &__title {
    @extend %text_chapter-title;
    margin-top: 30px;
  }
  &__block {
    display: inline-block;
    &__not-first {
      margin-left: 30px;
    }
  }
  &__title__sub {
    @extend %text_chapter-title_sub;
    margin-top: 30px;
  }
  &__list {
    @extend %text_short;
    display: inline-block;
    margin-top: 20px;
    padding-left: 20px;
    li {
      margin-top: 10px;
    }
  }
}
</style>
