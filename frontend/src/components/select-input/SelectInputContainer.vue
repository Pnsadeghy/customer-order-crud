<template>
  <div class="select-input-container" >
      <slot />
  </div>
</template>

<style lang="scss">
.select-input-container{
  .headless-select{
    @apply block text-gray-400 disabled:bg-gray-100 w-full rounded-lg border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;

    &[aria-expanded="true"] {
      @apply ring-2 ring-indigo-600;
    }
    &.selected{
      @apply text-black;
    }
  }
}
</style>