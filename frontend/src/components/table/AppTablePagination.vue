<template>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white lg:px-8 sm:px-6 px-4 py-2">
        <div class="flex flex-1 justify-between sm:hidden">
            <button type="button"
                    :disabled="!previousEnabled"
                    @click.prevent="onPage(pagination.current_page - 1)"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-70">
                {{ $t('button.prev') }}
            </button>
            <button type="button"
                    :disabled="!nextEnabled"
                    @click.prevent="onPage(pagination.current_page + 1)"
                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-70">
                {{ $t('button.next') }}
            </button>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    {{ ' ' }}
                    <span class="font-medium">{{ pagination.from }}</span>
                    {{ ' ' }}
                    to
                    {{ ' ' }}
                    <span class="font-medium">{{ pagination.to }}</span>
                    {{ ' ' }}
                    of
                    {{ ' ' }}
                    <span class="font-medium">{{ pagination.total }}</span>
                    {{ ' ' }}
                    results
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button type="button"
                            :disabled="!previousEnabled"
                            @click.prevent="onPage(pagination.current_page - 1)"
                            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-70">
                        <span class="sr-only">Previous</span>
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button type="button"
                            v-for="item in list" :key="item.page"
                            @click.prevent="onPage(item.page)"
                            :class="item.active ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0">
                        {{ item.text }}
                    </button>
                    <button type="button"
                            :disabled="!nextEnabled"
                            @click.prevent="onPage(pagination.current_page + 1)"
                            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-70">
                        <span class="sr-only">Next</span>
                        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type TablePaginationButtonInterface from "./interfaces/table.pagination.button.interface"
import type TablePaginationInterface from "./interfaces/table.pagination.interface"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import {computed} from "vue"

interface componentProps {
    pagination: TablePaginationInterface
}
const emits = defineEmits<{
    (e: "change", value: number): void
}>()
const props = defineProps<componentProps>()

const onPage = (page: number) => {
    emits("change", page)
}

const lastPage = computed(() => Math.ceil(props.pagination.total / props.pagination.per_page))
const previousEnabled = computed(() => props.pagination.current_page > 1)
const nextEnabled = computed(() => props.pagination.current_page < lastPage.value)

const list: TablePaginationButtonInterface[] = computed(() => {
    const result: TablePaginationButtonInterface[] = []

    result.push({ page: props.pagination.current_page, text: props.pagination.current_page.toString(), active: true })

    if (props.pagination.current_page !== 1) {
        const loop_start = Math.max(1, props.pagination.current_page - 1)

        for (let i = props.pagination.current_page - 1; i >= loop_start; i--)
            result.unshift({ page: i, text: i.toString() })

        if (loop_start > 2) {
            result.unshift({ page: loop_start - 1, text: '...' })
        }
        if (loop_start > 1) result.unshift({ page: 1, text: '1' })
    }

    if (props.pagination.current_page !== lastPage.value) {
        const loop_end = Math.min(lastPage.value, props.pagination.current_page + 2)

        for (let i = props.pagination.current_page + 1; i < loop_end; i++) {
            result.push({ page: i, text: i.toString() })
        }

        if (lastPage.value !== loop_end) result.push({ page: loop_end, text: '...' })

        result.push({ page: lastPage.value, text: lastPage.value.toString() })
    }

    return result
})
</script>