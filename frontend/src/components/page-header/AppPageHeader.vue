<template>
    <div class="flex justify-between items-center pb-4 mb-4 border-b border-gray-300" >
        <h1 class="font-semibold text-lg" >{{ title }}</h1>
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>