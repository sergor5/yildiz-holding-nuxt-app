<template>
  <div class="container mx-auto grid place-items-center h-64 bg-gray-700 pt-10">
    <DottedBordersWrapper
      dotColor="white"
      borderColor="white"
      :borderOpacity="50"
      class="mb-10 active:scale-95 transition-transform"
    >
      <ActionButton> HEMEN BAŞVUR </ActionButton>
    </DottedBordersWrapper>
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
    <!-- <div class="bg-green-400 w-32 h-12 absolute z-0">Text</div> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
