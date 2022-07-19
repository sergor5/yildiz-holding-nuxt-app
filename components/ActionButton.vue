<template>
  <button
    class="
      px-14
      py-5
      bg-primary
      text-white
      font-bold
      text-3xl
      hover:bg-primary-hover
      active:bg-primary-active
      transition-all
      active:scale-95
    "
  >
    <p class="drop-shadow-glow">
      <slot />
    </p>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>