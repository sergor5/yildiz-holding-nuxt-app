<template>
  <div>
    <VerticalNavbar class="z-50" />

    <Nuxt />
    <footer
      class="
        bg-primary
        flex
        justify-between
        items-center
        text-white
        px-3
        py-3
        md:px-12
      "
    >
      <div class="flex items-center text-1xl sm:text-3xl font-bold gap-2">
        YILDIZ<span><StarIcon class="w-4 h-4 sm:w-8 sm:h-8" /></span>
        HOLDING
      </div>
      <div class="flex items-center">
        <div class="grid place-items-center p-4">
          <LinkedinIcon class="fill-current text-white w-5 h-5 sm:w-7 sm:h-7" />
        </div>
        <div class="grid place-items-center p-4">
          <InstagramIcon
            class="fill-current text-white w-5 h-5 sm:w-7 sm:h-7"
          />
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