<template>
  <div
    class="
      fixed
      top-2
      right-2
      md:top-8 md:right-8
      flex flex-col
      justify-between
      divide-y divide-white divide-opacity-40
      md:w-24
      bg-secondary bg-opacity-70
      md:bg-primary md:bg-opacity-20
      backdrop-blur-sm
      border border-white border-opacity-40
      transition-all
    "
    :class="{
      'h-3/5': menuOpen,
      'h-[91px]': !menuOpen,
      'w-11/12': menuOpen && isMobile,
      'w-[91px]': !menuOpen && isMobile,
    }"
    data-aos="non-transform-fade"
  >
    <div>
      <div class="w-full text-white text-base px-4 pt-2 flex justify-end">
        <button
          class="flex flex-col items-end md:items-center"
          @click="toggleMenuOpen"
        >
          <MenuIcon class="my-2" />
          <div class="font-semibold w-14">MENU</div>
        </button>
      </div>
      <nav class="relative p-5 md:p-0 md:w-0 flex justify-end" v-if="menuOpen">
        <ul class="absolute text-white whitespace-nowrap">
          <li
            v-for="item in navItems"
            class="nav-item"
            :class="{ 'active font-bold': item.id == selectedId }"
            :key="item.id"
            data-aos="fade-left"
            :data-aos-delay="item.id * 100"
          >
            <a :href="item.url" @click="selectItem(item.id)">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-full flex md:flex-col" v-if="menuOpen">
      <div
        class="w-full h-16 py-2 grid place-items-center"
        data-aos="fade"
        data-aos-delay="200"
      >
        <a
          href="https://www.linkedin.com/company/yildizholding"
          target="_blank"
        >
          <LinkedinIcon
            class="
              fill-current
              transition
              text-white
              hover:text-primary hover:cursor-pointer
            "
          />
        </a>
      </div>
      <div
        class="w-full h-16 py-2 grid place-items-center"
        data-aos="fade"
        data-aos-delay="250"
      >
        <a href="https://www.instagram.com/yildizholding/" target="_blank">
          <InstagramIcon
            class="
              fill-current
              transition
              text-white
              hover:text-primary hover:cursor-pointer
            "
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 0,
      visible: true,
      menuOpen: true,
      windowWidth: 768,
      navItems: [
        { id: 0, text: 'HAKKINDA', url: '#about' },
        { id: 1, text: 'PROGRAM', url: '#program' },
        { id: 2, text: 'KİMLER KATILABİLİR?', url: '#who-can-join' },
        { id: 3, text: 'NELER KAZANACAĞIM?', url: '#what-will-i-win' },
        { id: 4, text: 'BAŞVURU SÜREÇLERİ', url: '#application-process' },
        { id: 5, text: 'SIKÇA SORULAN SORULAR', url: '#faq' },
      ],
    }
  },
  methods: {
    selectItem(id) {
      this.selectedId = id
      if (this.isMobile) {
        setTimeout(() => {
          this.menuOpen = false
        }, 300)
      }
    },
    toggleMenuOpen() {
      this.menuOpen = !this.menuOpen
    },
    onResize() {
      this.windowWidth = window.screen.width
    },
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.screen.width

      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style lang="scss" scoped>
[data-aos='non-transform-fade'] {
  opacity: 0;

  &.aos-animate {
    opacity: 1;
  }
}
.nav-item {
  @apply pr-3 py-2 flex justify-end items-center transition-all hover:pr-4;

  letter-spacing: 0.3rem;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    right: -5px;
    @apply border border-white;
  }
  &.active::after {
    @apply bg-primary border-none;
  }

  &:not(.active):hover::after {
    @apply bg-white;
  }
  &:not(.active) {
    @apply font-light;
    :hover {
      @apply font-bold;
    }
  }
}
</style>