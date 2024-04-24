<template>
    <div>
        <h1 class="font-semibold text-lg" >{{ title }}</h1>

        <slot name="link" />

        <div class="border-t border-gray-200 pt-3 mt-3" >
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>