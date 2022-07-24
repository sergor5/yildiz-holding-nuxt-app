<template>
  <button
    class="
      px-6
      py-3
      lg:px-14
      md:py-5
      bg-primary
      text-white
      font-black
      text-2xl
      lg:text-3xl
      hover:bg-primary-hover
      active:bg-primary-active
      transition-all
      active:scale-95
    "
    :type="type"
  >
    <p class="drop-shadow-glow">
      <slot />
    </p>
  </button>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'button' },
  },
}
</script>

<style lang="scss" scoped>
button {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
}
</style>