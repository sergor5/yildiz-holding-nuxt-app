<template>
  <client-only>
    <Flicking
      :options="{
        moveType: 'snap',
        bound: false,
        align: 'center',
        interruptable: true,
      }"
      ref="flicking"
      class="p-4"
    >
      <DottedBordersWrapper
        v-for="(item, index) in items"
        :key="'item-' + index"
        :borderOpacity="0.6"
        class="mx-6 md:mx-10 w-72 md:w-[470px] bg-white"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <div class="flex flex-col p-8 md:p-14 gap-4 h-full">
          <slot name="iconbox" :icon="item.icon">
            <div class="w-full h-16 md:h-28 justify-self-start">
              <span
                class="
                  absolute
                  w-16
                  h-16
                  md:w-28 md:h-28
                  grid
                  place-items-center
                  bg-primary
                  left-0
                  top-10
                  -translate-x-1/2
                "
              >
                <p
                  class="
                    drop-shadow-glow
                    text-3xl
                    md:text-7xl
                    font-black
                    text-white
                  "
                >
                  {{ item.icon }}
                </p>
              </span>
            </div>
          </slot>
          <slot :upperText="item.upperText" :lowerText="item.lowerText">
            <p
              class="
                text-secondary
                font-extrabold
                text-3xl
                md:text-5xl
                justify-self-start
              "
              v-html="item.upperText"
            ></p>
            <hr class="bg-primary h-1 w-1/2" />
            <p
              v-if="item.lowerText"
              class="text-secondary font-extrabold text-3xl md:text-5xl"
              v-html="item.lowerText"
            ></p>
          </slot>
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
@import '@egjs/vue-flicking/dist/flicking.css';
</style>
