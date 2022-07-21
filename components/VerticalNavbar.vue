<template>
  <div
    class="
      fixed
      top-8
      right-8
      flex flex-col
      justify-between
      divide-y divide-white divide-opacity-40
      h-3/5
      w-24
      bg-primary bg-opacity-20
      backdrop-blur-sm
      border border-white border-opacity-40
    "
  >
    <div>
      <div class="w-full text-center text-white text-base">
        <div>
          <MenuIcon class="mx-auto my-2" />
        </div>
        <div class="font-semibold">MENU</div>
      </div>
      <nav class="relative w-0 flex justify-end">
        <ul class="absolute text-white whitespace-nowrap">
          <li
            v-for="item in navItems"
            class="nav-item"
            :class="{ 'active font-bold': item.id == selectedId }"
            :key="item.id"
          >
            <a :href="item.url" @click="selectItem(item.id)">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-full">
      <div class="w-full h-16 py-2 grid place-items-center">
        <LinkedinIcon class="fill-current text-primary" />
      </div>
      <div class="w-full h-16 py-2 grid place-items-center">
        <InstagramIcon class="fill-current text-white" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 0,
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
    },
  },
}
</script>

<style lang="scss" scoped>
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