<template>
  <header class="sticky top-0 relative z-10 bg-white w-full" >
      <div class="container">
          <div class="flex justify-between h-16 items-center" >
              <slot name="logo" />
              <button type="button"
                      @click.prevent="emits('logout')"
                      class="h-10 w-10 text-gray-500 hover:text-gray-700" >
                  <ArrowLeftStartOnRectangleIcon class="h-6" />
              </button>
          </div>
      </div>
  </header>
</template>

<script setup lang="ts">
import {ArrowLeftStartOnRectangleIcon} from "@heroicons/vue/24/outline"

const emits = defineEmits<{
    (e: "logout"): void
}>()
</script>