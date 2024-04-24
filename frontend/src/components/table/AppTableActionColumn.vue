<template>
  <div class="flex justify-end" >
      <div class="flex gap-2">
          <router-link class="text-indigo-500 hover:text-indigo-700"
                       :to="editRoute" >
              {{ $t('button.edit')}}
          </router-link>
          <button type="button"
                  @click.prevent="emits('delete')"
                  class="text-red-500 hover:text-red-700" >
              {{ $t('button.delete')}}
          </button>
      </div>
  </div>
</template>
<script setup lang="ts">
import type RouteInterface from "@/utils/interfaces/route.interface"

defineProps<{
    editRoute: RouteInterface
}>()
const emits = defineEmits<{
    (e: "delete"): void
}>()
</script>