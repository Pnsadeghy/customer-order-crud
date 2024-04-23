<template>
  <app-button class="!px-2" >
      <PlusIcon class="h-5" />
      <span class="md:inline hidden" ><slot /></span>
  </app-button>
</template>
<script setup>
import AppButton from "@/components/button/AppButton.vue"
import {PlusIcon} from "@heroicons/vue/24/outline"
</script>