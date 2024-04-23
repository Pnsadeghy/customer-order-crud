<template>
  <div class="min-h-screen w-full bg-gray-200 flex items-center justify-center p-4" >
      <app-card class="min-w-96 p-4" >
          <router-view />
      </app-card>
  </div>
</template>
<script setup>
import AppCard from "@/components/card/AppCard.vue"
</script>