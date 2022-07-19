<template>
  <div :class="`relative border ${borderClasses} p-2`">
    <slot />
    <div class="dot-container left-0 top-0">
      <span :class="`dot bg-${dotColor} bg-opacity-${dotOpacity}`"></span>
    </div>
    <div class="dot-container right-0 top-0">
      <span :class="`dot bg-${dotColor} bg-opacity-${dotOpacity}`"></span>
    </div>
    <div class="dot-container left-0 bottom-0">
      <span :class="`dot bg-${dotColor} bg-opacity-${dotOpacity}`"></span>
    </div>
    <div class="dot-container right-0 bottom-0">
      <span :class="`dot bg-${dotColor} bg-opacity-${dotOpacity}`"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    borderColor: { type: String, default: 'primary' },
    borderOpacity: { type: Number, default: 100 },
    dotColor: { type: String, default: 'primary' },
    dotOpacity: { type: Number, default: 100 },
  },
  computed: {
    borderClasses() {
      return `border-${this.borderColor} border-opacity-${this.borderOpacity}`
    },
  },
}
</script>

<style lang="scss" scoped>
.dot-container {
  @apply absolute w-0 h-0 grid place-items-center;
  .dot {
    @apply absolute w-2.5 h-2.5;
  }
}
</style>