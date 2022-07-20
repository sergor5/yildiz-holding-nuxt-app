<template>
  <div
    class="
      fixed
      top-8
      right-8
      flex flex-col
      justify-between
      divide-y divide-white divide-opacity-30
      h-3/5
      w-24
      bg-primary bg-opacity-40
      backdrop-blur-lg
      border border-white border-opacity-30
    "
  >
    <div>
      <div class="w-full text-center text-white text-base">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="26"
            viewBox="0 0 57 26"
            class="mx-auto my-2"
          >
            <rect
              id="Rectangle_11"
              data-name="Rectangle 11"
              width="31"
              height="3"
              transform="translate(23)"
              fill="#fff"
            />
            <rect
              id="Rectangle_26"
              data-name="Rectangle 26"
              width="31"
              height="3"
              transform="translate(26 23)"
              fill="#fff"
            />
            <rect
              id="Rectangle_23"
              data-name="Rectangle 23"
              width="10"
              height="3"
              transform="translate(10)"
              fill="#fff"
            />
            <rect
              id="Rectangle_25"
              data-name="Rectangle 25"
              width="10"
              height="3"
              transform="translate(13 23)"
              fill="#fff"
            />
            <rect
              id="Rectangle_24"
              data-name="Rectangle 24"
              width="10"
              height="3"
              transform="translate(37 12)"
              fill="#fff"
            />
            <rect
              id="Rectangle_12"
              data-name="Rectangle 12"
              width="32"
              height="3"
              transform="translate(0 12)"
              fill="#fff"
            />
          </svg>
        </div>
        MENU
      </div>
      <nav class="relative w-0 flex justify-end">
        <ul class="absolute text-white whitespace-nowrap">
          <li
            v-for="item in navItems"
            class="nav-item"
            :class="{ active: item.id == selectedId }"
            :key="item.id"
          >
            <a :href="item.url" @click="selectItem(item.id)">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-full">
      <div class="w-full h-16 py-2 grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27.628"
          height="27.579"
          viewBox="0 0 27.628 27.579"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M.454,9.157H6.181V27.579H.454ZM3.318,0A3.32,3.32,0,1,1,0,3.322,3.322,3.322,0,0,1,3.318,0"
            transform="translate(0)"
            fill="#ea2044"
          />
          <path
            id="Path_11"
            data-name="Path 11"
            d="M157.107,140.371H162.6v2.52h.079a6.012,6.012,0,0,1,5.417-2.975c5.8,0,6.869,3.814,6.869,8.773v10.1H169.24v-8.958c0-2.136-.037-4.886-2.976-4.886-2.979,0-3.434,2.33-3.434,4.732v9.112h-5.723Z"
            transform="translate(-147.336 -131.214)"
            fill="#ea2044"
          />
        </svg>
      </div>
      <div class="w-full h-16 py-2 grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33.355"
          height="33.356"
          viewBox="0 0 33.355 33.356"
        >
          <path
            id="Path_22"
            data-name="Path 22"
            d="M26.939,6.318a1.955,1.955,0,1,0,1.955,1.955,1.956,1.956,0,0,0-1.955-1.955"
            transform="translate(-1.431 -0.362)"
            fill="#fff"
          />
          <path
            id="Path_23"
            data-name="Path 23"
            d="M17.337,8.977a8.215,8.215,0,1,0,8.214,8.215,8.224,8.224,0,0,0-8.214-8.215m0,13.476A5.262,5.262,0,1,1,22.6,17.192a5.268,5.268,0,0,1-5.261,5.261"
            transform="translate(-0.522 -0.514)"
            fill="#fff"
          />
          <path
            id="Path_24"
            data-name="Path 24"
            d="M23.336,33.356H10.019A10.03,10.03,0,0,1,0,23.337V10.019A10.03,10.03,0,0,1,10.019,0H23.336A10.031,10.031,0,0,1,33.355,10.019V23.337A10.031,10.031,0,0,1,23.336,33.356M10.019,3.138a6.888,6.888,0,0,0-6.881,6.881V23.337a6.888,6.888,0,0,0,6.881,6.881H23.336a6.888,6.888,0,0,0,6.881-6.881V10.019a6.888,6.888,0,0,0-6.881-6.881Z"
            fill="#fff"
          />
        </svg>
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
  @apply pr-3 py-2 flex justify-end items-center transition-all hover:pr-4 font-light hover:font-bold;

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
}
</style>