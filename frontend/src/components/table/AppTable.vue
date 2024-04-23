<template>
    <app-card class="overflow-hidden" >
        <component v-if="schema.searchComponent"
                   @search="onSearch"
                   :is="schema.searchComponent" />

        <app-table-container :columns="schema.columns" :has-action-column="schema.hasActionColumn">
            <app-table-row v-for="item in tableList"
                           :key="item.id">
                <component :is="schema.recordComponent" :item="item" @delete="onDelete(item)" />
            </app-table-row>
        </app-table-container>

        <div v-if="isEmpty" class="py-8 flex justify-center">
            <div class="text-center" >
                <component :is="schema.empty.icon" class="h-10 block mx-auto mb-3 text-gray-400" />
                <span>{{ $t(schema.empty.text) }}</span>
            </div>
        </div>

        <app-table-pagination v-if="schema.pagination"
                              :pagination="pagination"
                              @change="onPageChanged"/>
    </app-card>
</template>

<script setup lang="ts">
import type TablePaginationInterface from "./interfaces/table.pagination.interface"
import type TableSchemaInterface from "./interfaces/table.schema.interface"
import AppTableContainer from "@/components/table/AppTableContainer.vue"
import {openDeletePrompt} from "@/components/prompt/utils/prompt.utils"
import AppTablePagination from "./AppTablePagination.vue"
import AppCard from "@/components/card/AppCard.vue"
import AppTableRow from "./AppTableRow.vue"
import {ref, computed, onMounted} from "vue"

const props = defineProps<{
    schema: TableSchemaInterface
}>()

const list = ref<object[]>([])
const deletes = ref<string[]>([])
const pagination = ref<TablePaginationInterface>({
    current_page: 1,
    per_page: 10,
    total: 0
})
const order = ref<string>("")
const orderType = ref<string>("")
const search = ref<object>({})

const tableList = computed(() => deletes.value.length === 0 ? list.value : list.value.filter((i: object) => !deletes.value.includes(i["id"])))
const isEmpty = computed(() => tableList.value.length === 0)

const getData = () => {
    const data: object = {...search.value}
    if (props.schema.pagination) {
        data['page'] = pagination.value.current_page
        data['per_page'] = pagination.value.per_page
    }
    if (order.value) {
        data['order'] = order.value
        if (orderType.value)
            data['order_type'] = orderType.value
    }

    props.schema.api(data).then((res: any) => {
        list.value = res.data.data

        console.log(res.data)

        if (props.schema.pagination) {
            pagination.value = {
                current_page: res.data.meta.current_page,
                per_page: res.data.meta.per_page,
                from: res.data.meta.from,
                to: res.data.meta.to,
                total: res.data.meta.total
            }
        }
    })
}

const onSearch = (data: object) => {
    search.value = data
    pagination.value.current_page = 1
    getData()
}

const onPageChanged = (page: number) => {
    pagination.value.current_page = page
    getData()
}

const onDelete = (item: object) => {
    openDeletePrompt(() => {
        deletes.value.push(item["id"])
        const paginationValue = {...pagination.value}
        paginationValue.total--
        if (paginationValue.to > paginationValue.total)
            paginationValue.to = paginationValue.total
        if (tableList.value.length === 0 && pagination.value.current_page > 1) {
            paginationValue.current_page = 1
            getData()
        }
        pagination.value = paginationValue
        props.schema.deleteApi(item).then(() => {
            list.value = list.value.filter((i: object) => i["id"] !== item["id"])
        }).finally(() => {
            deletes.value = deletes.value.filter((i: string) => i !== item["id"])
        })
    })
}

onMounted(getData)
</script>