<template>
    <div class="md:table min-w-full border-t border-gray-200">
        <div class="md:table-header-group hidden">
            <div class="md:table-row" >
                <div v-for="item in columns"
                     :key="item.name"
                     class="table-cell border-b border-gray-200 bg-gray-100 px-3 py-3.5 first:lg:ps-8 first:md:ps-6 first:ps-0 text-left text-sm font-semibold text-gray-900">
                    {{ item.name ? $t(item.name) : "" }}
                </div>
                <div class="table-cell border-b border-gray-200 bg-gray-100 relative py-3.5" v-if="hasActionColumn">

                </div>
            </div>
        </div>

        <div class="md:table-row-group">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
import type TableSchemaColumnInterface from "./interfaces/table.schema.column.interface"

defineProps<{
    columns: TableSchemaColumnInterface[]
    hasActionColumn?: boolean
}>()
</script>