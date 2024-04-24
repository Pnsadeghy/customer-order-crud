<template>
  <div :class="{'box-loading': loader.loading}">
      <slot v-if="loader.loaded" />
      <div v-else class="h-20 flex items-center justify-center" :class="cssClass" >
          <icon-spinner v-if="loader.loading" class="h-5" />
          <button v-else class="text-red-500 hover:text-red-700" type="button" @click="emits('reload')">
              <span class="flex gap-1 justify-center items-center text-lg" >
                  <XCircleIcon class="h-5" />
                  {{ loader.error }}
              </span>
              <span class="text-sm" >{{ $t('button.try') }}</span>
          </button>
      </div>
  </div>
</template>

<script setup lang="ts">
import type LoaderInterface from "./interfaces/loader.interface"
import IconSpinner from "../icons/IconSpinner.vue"
import {
    XCircleIcon
} from '@heroicons/vue/24/outline'

interface componentProps {
    loader: LoaderInterface
    cssClass: string
}
const emits = defineEmits<{
    (e: "reload"): void
}>()
defineProps<componentProps>()
</script>