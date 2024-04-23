<template>
  <button :class="['app-button', theme, shape, size, {loading}]"
          :disabled="!!loading"
          :type="submit ? 'submit' : 'button'" >
      <span class="content flex justify-center items-center gap-1">
          <slot />
      </span>
      <span v-if="loading" class="absolute top-0 start-0 w-full h-full flex items-center justify-center opacity-50" >
          <icon-spinner class="h-5" />
      </span>
  </button>
</template>

<script setup lang="ts">
import type ButtonPropInterface from "./interfaces/button.prop.interface"
import IconSpinner from "../icons/IconSpinner.vue"

withDefaults(defineProps<ButtonPropInterface>(), {
    theme: 'primary',
    size: 'normal',
    shape: 'default'
})
</script>