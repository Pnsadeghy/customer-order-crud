<template>
    <app-information>
        <app-information-item :label="$t('order.form.customer')">
            {{ order.customer }}
        </app-information-item>
        <app-information-item :label="$t('order.form.date')">
            {{ $filters.date(order.date) }}
        </app-information-item>
        <app-information-item :label="$t('order.form.totalPrice')">
            {{ $filters.currency(order.totalPrice) }}
        </app-information-item>
        <app-information-item :label="$t('order.form.address')">
            {{ order.address }}
        </app-information-item>
        <app-information-item :label="$t('order.product.title')">
            <div class="divide-y divide-gray-100">
                <div v-for="(item, index) in orderItems" :key="index" class="flex justify-between gap-2" >
                    <span>{{ item.product }}</span>
                    <span>
                        <strong>{{ item.quantity }}</strong> * {{ $filters.currency(item.price) }} = {{ $filters.currency(item.price * item.quantity) }}
                    </span>
                </div>
            </div>
        </app-information-item>
    </app-information>
</template>

<script setup lang="ts">
import AppInformationItem from "@/components/information/AppInformationItem.vue"
import AppInformation from "@/components/information/AppInformation.vue"
import type OrderInterface from "@/app/order/interfaces/order.interface"
import useProductStore from "@/stores/product.store"
import {storeToRefs} from "pinia"
import {computed} from "vue"
import OrderProductInterface from "@/app/order/interfaces/order.product.interface";
import ProductItemInterface from "@/app/product/interfaces/product.item.interface";

const props = defineProps<{
    order: OrderInterface
}>()

const {products} = storeToRefs(useProductStore())
const orderItems = computed(() => props.order.items.map((i: OrderProductInterface) => ({
    ...i,
    product: products.value.find((p: ProductItemInterface) => p.id === i.product)?.name || "-"
})))
</script>