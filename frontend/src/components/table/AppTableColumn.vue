<template>
    <div class="md:table-cell md:align-middle md:border-b border-gray-200 whitespace-nowrap md:px-3 md:py-5 first:lg:ps-8 first:md:ps-6 first:ps-0 last:lg:pe-8 last:md:pe-6 last:pe-0 text-sm text-gray-500">
        <div class="md:block flex items-center gap-2" >
            <span v-if="label" class="md:hidden text-sm font-semibold whitespace-nowrap">{{ label }}:</span>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
interface componentProps {
    label?: string
}
defineProps<componentProps>()
</script>