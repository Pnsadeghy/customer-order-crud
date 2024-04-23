<template>
  <router-link :to="to" class="!px-2 app-button primary default normal flex items-center gap-1" >
      <PlusIcon class="h-5" />
      <span class="md:inline hidden" ><slot /></span>
  </router-link>
</template>
<script setup lang="ts">
import type RouteInterface from "@/utils/interfaces/route.interface"
import {PlusIcon} from "@heroicons/vue/24/outline"

defineProps<{
    to: RouteInterface
}>()
</script>