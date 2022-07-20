<template>
  <div class="h-[5000px] bg-gray-700">
    <div
      class="
        main-section
        relative
        w-full
        bg-cover bg-center bg-no-repeat
        min-h-screen
      "
    >
      <Logo class="absolute left-0 top-0" />
      <div class="flex justify-center w-full relative top-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="663"
          height="430"
          viewBox="0 0 663 430"
          class=""
        >
          <defs>
            <pattern
              id="pattern"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
              viewBox="0 0 588 381"
            >
              <image width="588" height="381" href="~assets/images/badge.png" />
            </pattern>
          </defs>
          <rect id="badge" width="663" height="430" fill="url(#pattern)" />
        </svg>
      </div>
      <div class="absolute w-full flex justify-around bottom-20">
        <DottedBordersWrapper
          dotColor="bg-white"
          borderColor="border-white"
          :borderOpacity="0.6"
        >
          <div class="text-white text-center px-4 py-1.5">
            <p class="text-xl">SON KATILIM TARİHİ</p>
            <p class="drop-shadow-glow text-3xl font-black">10.04.2022</p>
          </div>
        </DottedBordersWrapper>

        <DottedBordersWrapper
          dotColor="bg-white"
          borderColor="border-white"
          :borderOpacity="0.6"
          class="mb-10 active:scale-95 transition-transform"
        >
          <ActionButton> HEMEN BAŞVUR </ActionButton>
        </DottedBordersWrapper>
      </div>
    </div>
    <VerticalNavbar />
    <!--
    <DottedBordersWrapper
      dotColor="white"
      borderColor="white"
      class="
        w-60
        p-4
        bg-gray-300 bg-opacity-40
        backdrop-filter backdrop-blur-[5px]
        z-10
      "
    >
      <div class="flex flex-col">
        <div class="flex h-10">
          <div class="absolute -left-8 bg-white border border-gray-500 p-2">
            TEST BOX
          </div>
        </div>
        Some content to display Some content to display Some content to display
        Some content to display
      </div>
    </DottedBordersWrapper>
    <div class="bg-green-400 w-32 h-12 absolute z-0">Text</div> -->
    <section id="about">HAKKIMIZDA</section>
    <section id="program">PROGRAM</section>
    <section id="who-can-join">KİMLER KATILABİLİR?</section>
    <section id="what-will-i-win">NELER KAZANACAĞIM?</section>
    <section id="application-process">BAŞVURU SÜREÇLERİ</section>
    <section id="faq">SIKÇA SORULAN SORULAR</section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.main-section {
  background-image: url('~assets/images/BG.png');
}
section {
  color: white;
}
</style>