<template>
  <div
    :class="`dot-border relative border ${borderColor} p-2 w-fit`"
    :style="cssVars"
  >
    <slot />
    <div class="dot-container left-0 top-0">
      <span :class="`dot ${dotColor}`"></span>
    </div>
    <div class="dot-container right-0 top-0">
      <span :class="`dot ${dotColor}`"></span>
    </div>
    <div class="dot-container left-0 bottom-0">
      <span :class="`dot ${dotColor}`"></span>
    </div>
    <div class="dot-container right-0 bottom-0">
      <span :class="`dot ${dotColor}`"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    borderColor: { type: String, default: 'border-primary' },
    borderOpacity: { type: Number, default: 1 },
    dotColor: { type: String, default: 'bg-primary' },
  },
  computed: {
    cssVars() {
      return {
        '--tw-border-opacity': this.borderOpacity,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dot-border {
  width: fit-content;
  .dot-container {
    @apply absolute w-0 h-0 grid place-items-center;
    .dot {
      @apply absolute w-2.5 h-2.5;
    }
  }
}
</style>