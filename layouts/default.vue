<template>
  <div>
    <Nuxt />
    <footer
      class="
        h-40
        bg-primary
        w-full
        flex
        justify-between
        items-center
        text-white
        px-8
      "
    >
      <div class="flex items-center text-5xl font-bold gap-2">
        YILDIZ<span><StarIcon /></span> HOLDING
      </div>
      <div class="flex items-center">
        <div class="grid place-items-center p-5">
          <LinkedinIcon class="fill-current text-white" />
        </div>
        <div class="grid place-items-center p-5">
          <InstagramIcon class="fill-current text-white" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>