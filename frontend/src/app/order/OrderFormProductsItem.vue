<template>
    <app-table-row>
        <app-table-column :label="$t('order.product.product')">
            <select-input :list="products" required
                          :placeholder="$t('order.product.choose')"
                          v-model="item.product" />
        </app-table-column>
        <app-table-column class="md:w-36" :label="$t('order.product.product_price')">
            <a href=""
               class="text-indigo-500 hover:text-indigo-700"
               @click.prevent="item.price = productPrice">
                {{ $filters.currency(productPrice) }}
            </a>
        </app-table-column>
        <app-table-column class="md:w-36" :label="$t('order.product.price')">
            <form-kit v-model="item.price"
                      step="any"
                      number
                      type="number" outer-class="hide-message !mb-0" validation="required|min:0.1" />
        </app-table-column>
        <app-table-column class="md:w-36" :label="$t('order.product.quantity')">
            <form-kit v-model="item.quantity"
                      step="1"
                      number="integer"
                      type="number" outer-class="hide-message !mb-0" validation="required|min:1" />
        </app-table-column>
        <app-table-column class="md:w-36" :label="$t('order.product.total')">
            {{ $filters.currency(totalPrice) }}
        </app-table-column>
        <app-table-column class="md:w-10 !p-0" >
            <app-button v-if="removable"
                        @click.prevent="emits('delete')"
                        shape="default icon" size="small" theme="danger">
                <XMarkIcon />
            </app-button>
        </app-table-column>
    </app-table-row>
</template>

<script setup lang="ts">
import ProductItemInterface from "@/app/product/interfaces/product.item.interface"
import type OrderProductInterface from "./interfaces/order.product.interface"
import SelectInput from "@/components/select-input/SelectInput.vue"
import AppTableColumn from "@/components/table/AppTableColumn.vue"
import AppTableRow from "@/components/table/AppTableRow.vue"
import AppButton from "@/components/button/AppButton.vue"
import {XMarkIcon} from "@heroicons/vue/24/outline"
import {computed, watch} from "vue"

const props = defineProps<{
    item: OrderProductInterface
    products: ProductItemInterface[]
    removable?: boolean
}>()
const emits = defineEmits<{
    (e: "delete"): void
}>()

const totalPrice = computed(() => props.item.price && props.item.quantity ? props.item.price * props.item.quantity : 0)
const product = computed(() => props.products.find((i: ProductItemInterface) => i.id === props.item.product))
const productPrice = computed(() => props.item.product ? product.value?.price || 0 : 0)

watch(() => props.item.product, () => {
    props.item.price = productPrice.value
})
</script>