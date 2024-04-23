<template>
  <p class="mt-2 text-sm" >
      {{ $t(text) }}

      <router-link :to="to" class="text-blue-500 hover:text-blue-700">
          {{ $t(link) }}
      </router-link>
  </p>
</template>

<script setup lang="ts">
import type RouteInterface from "@/utils/interfaces/route.interface"

defineProps<{
    text: string
    link: string
    to: RouteInterface
}>()
</script>