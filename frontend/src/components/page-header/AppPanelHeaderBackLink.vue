<template>
  <router-link :to="to" class="flex gap-1 items-center text-indigo-500 hover:text-indigo-700">
      <ChevronLeftIcon class="h-4 block" />
      <span class="md:inline hidden" >{{ $t('button.back') }}</span>
  </router-link>
</template>

<script setup lang="ts">
import type RouteInterface from "@/utils/interfaces/route.interface"
import {ChevronLeftIcon} from "@heroicons/vue/24/outline"

defineProps<{
    to: RouteInterface
}>()
</script>