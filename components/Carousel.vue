<template>
  <client-only>
    <Flicking
      :options="{
        moveType: 'snap',
        bound: false,
        align: 'center',
        interruptable: false,
      }"
      ref="flicking"
      class="p-4"
    >
      <!-- <div
        v-for="(item, index) in items"
        :key="'item-' + index"
        :borderOpacity="0.6"
        class="flicking-panel"
      >
        <p class="text-center text-secondary p-10 text-3xl">
          {{ item.upperText }}
        </p>
        <hr class="text-secondary" />
        <p class="text-center text-secondary p-10 text-3xl">
          {{ item.lowerText }}
        </p>
      </div> -->
      <DottedBordersWrapper
        v-for="(item, index) in items"
        :key="'item-' + index"
        :borderOpacity="0.6"
        class="mx-10 w-[470px] bg-white"
      >
        <div class="flex flex-col p-14 gap-4">
          <div class="w-full h-28">
            <span
              class="
                absolute
                w-28
                h-28
                grid
                place-items-center
                bg-primary
                left-0
                top-10
                -translate-x-1/2
              "
            >
              <p class="drop-shadow-glow text-7xl font-black text-white">
                {{ item.icon }}
              </p>
            </span>
          </div>
          <p class="text-secondary font-extrabold text-5xl">
            {{ item.upperText }}
          </p>
          <hr class="bg-primary h-1 w-1/2" />
          <p class="text-secondary font-extrabold text-5xl">
            {{ item.lowerText }}
          </p>
        </div>
      </DottedBordersWrapper>
    </Flicking>
  </client-only>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="scss" >
</style>
