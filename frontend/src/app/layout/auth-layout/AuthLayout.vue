<template>
  <div class="min-h-screen w-full bg-gray-200 flex items-center justify-center p-4" >
      <div>
          <div class="flex justify-center" >
              <h2 class="flex items-center gap-x-2 text-2xl font-bold mb-8" >
                  <ClipboardDocumentListIcon class="h-8 opacity-50" />
                  {{ $t("title") }}
              </h2>
          </div>
          <app-card class="min-w-96 p-4" >
              <router-view />
          </app-card>
      </div>
  </div>
</template>
<script setup>
import {ClipboardDocumentListIcon} from "@heroicons/vue/24/outline"
import AppCard from "@/components/card/AppCard.vue"
</script>