<template>
  <div class="job-pos">
    <div class="job-pos__position">
      {{ position }}
    </div>
    <div class="job-pos__company">{{ company }} / {{ start }} - {{ end }}</div>
    <div class="job-pos__presentation">
      {{ presentation }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    start: {
      type: String,
      required: true
    },
    end: {
      type: String,
      required: true
    },
    presentation: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import 'assets/app.scss';
.job-pos {
  &__position {
    @extend %text_chapter-title_sub;
  }
  &__company {
    @extend %text_short;
    margin-top: 20px;
  }
  &__presentation {
    @extend %text_long;
    margin-top: 20px;
  }
}
</style>
