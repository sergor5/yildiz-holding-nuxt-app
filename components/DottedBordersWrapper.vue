<template>
  <div :class="`relative border border-primary p-2`">
    <slot />
    <div class="absolute w-0 h-0 left-0 top-0 grid place-items-center">
      <span class="absolute w-2.5 h-2.5 bg-primary"></span>
    </div>
    <div class="absolute w-0 h-0 right-0 top-0 grid place-items-center">
      <span class="absolute w-2.5 h-2.5 bg-primary"></span>
    </div>
    <div class="absolute w-0 h-0 left-0 bottom-0 grid place-items-center">
      <span class="absolute w-2.5 h-2.5 bg-primary"></span>
    </div>
    <div class="absolute w-0 h-0 right-0 bottom-0 grid place-items-center">
      <span class="absolute w-2.5 h-2.5 bg-primary"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['borderColor'],
}
</script>

<style lang="scss" scoped>
</style>