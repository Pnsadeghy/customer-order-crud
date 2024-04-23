<template>
  <div class="min-h-screen bg-gray-200" >
      <panel-layout-header />
      <section>
          <div class="container mx-auto py-8 px-4">
              <router-view />
          </div>
      </section>
  </div>
</template>
<script setup lang="ts">
import PanelLayoutHeader from "./PanelLayoutHeader.vue"
</script>