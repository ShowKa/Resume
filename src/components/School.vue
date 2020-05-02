<template>
  <div class="school">
    <div class="school__name">
      <span>
        {{ name }}
      </span>
      <span class="school__major">
        {{ major }}
      </span>
    </div>
    <div class="school__date">
      <span> {{ entry }} - {{ graduate }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    major: {
      type: String,
      required: true
    },
    entry: {
      type: String,
      required: true
    },
    graduate: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import 'assets/app.scss';
.school {
  &__name {
    @extend %text_short;
  }
  &__major {
    color: $color_primary_variant;
  }
  &__date {
    @extend %text_short_light;
  }
}
</style>
