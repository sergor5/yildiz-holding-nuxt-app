<template>
  <div>
    <div
      class="
        w-4/5
        xl:w-3/5
        mx-auto
        border border-secondary
        flex flex-col
        md:flex-row
        divide-y-2
        md:divide-x-2
        divide-secondary
        mb-16
      "
    >
      <button
        v-for="(btn, index) in buttons"
        :key="'tab-btn-' + index"
        class="
          flex-auto flex-nowrap
          p-4
          text-md
          md:text-xl
          lg:text-3xl
          font-bold
          text-center
        "
        :class="{ ' text-white bg-primary': selectedTabIndex == index }"
        @click="setSelectedTabIndex(index)"
      >
        {{ btn }}
      </button>
    </div>
    <div
      class="
        w-full
        flex
        justify-end
        items-center
        mt-4
        mb-2
        mx-auto
        px-5
        md:px-32
      "
    >
      <p class="text-secondary text-sm md:text-base font-semibold">
        PROGRAMIN DEVAMINI GÖRMEK İÇİN KAYDIR
      </p>
      <span class="inline-block ml-3"
        ><RightArrowIcon class="stroke-current text-primary"
      /></span>
    </div>
    <Carousel :items="currentProgramItems" :key="'tab-' + selectedTabIndex" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        'İŞE ALIM PROGRAMI 2022',
        'JOB PROJE BAZLI STAJ 2022',
        'VJE 2022',
      ],
      selectedTabIndex: 0,
      items: [
        [
          {
            icon: 1,
            upperText: 'Online Genel Yetenek Testi',
            lowerText: 'Online İngilizce Testi',
          },
          {
            icon: 2,
            upperText: 'Online Video Mülakat',
            lowerText: 'Online Temel Yetkinlik Envanteri',
          },
          { icon: 3, upperText: 'Online Case Challenge', lowerText: '' },
          { icon: 4, upperText: 'Genel Yetenek Kampı', lowerText: '' },
          {
            icon: 5,
            upperText: 'Departmanlar ile Online Mülakat',
            lowerText: '',
          },
          { icon: 6, upperText: 'Yıldız Ol ve Parla', lowerText: '' },
        ],
        [
          {
            icon: '1.b',
            upperText: 'Online Genel Yetenek Testi',
            lowerText: 'Online İngilizce Testi',
          },
          {
            icon: '2.b',
            upperText: 'Online Video Mülakat',
            lowerText: 'Online Temel Yetkinlik Envanteri',
          },
          { icon: '3.b', upperText: 'Online Case Challenge', lowerText: '' },
        ],
        [
          {
            icon: '1.c',
            upperText: 'Online Genel Yetenek Testi',
            lowerText: 'Online İngilizce Testi',
          },
          {
            icon: '2.c',
            upperText: 'Online Video Mülakat',
            lowerText: 'Online Temel Yetkinlik Envanteri',
          },
          { icon: '3.c', upperText: 'Online Case Challenge', lowerText: '' },
          { icon: '4.c', upperText: 'Genel Yetenek Kampı', lowerText: '' },
        ],
      ],
    }
  },
  methods: {
    setSelectedTabIndex(index) {
      this.selectedTabIndex = index
    },
  },
  computed: {
    currentProgramItems() {
      return this.items[this.selectedTabIndex]
    },
  },
}
</script>

<style lang="scss" scoped>
</style>