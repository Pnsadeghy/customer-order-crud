<template>
    <div class="overflow-x-auto">
        <div class="min-w-[58rem]" id="print">
            <table style="border-collapse: collapse;width: 100%;border: 1px solid #dddddd">
                <tr>
                    <td style="padding: 8px; width: 50%;border-right: solid thin #dddddd">
                  <span style="display: block">
                     {{ $t('order.print.order')}} <strong>#{{ order.code }}</strong>
                  </span>
                        <span style="display: block">
                     {{ $t('order.print.date')}}: <strong>{{ $filters.date(order.date) }}</strong>
                  </span>
                        <span style="display: block">
                     {{ $t('order.print.customer')}}: <strong>{{ order.customer }}</strong>
                  </span>
                    </td>
                    <td style="padding: 8px">
                        <span style="display: block">
                    {{ $t('order.print.address') }}: <strong>{{ order.address }}</strong>
                  </span>
                    </td>
                </tr>
            </table>
            <table style="border-collapse: collapse;width: 100%;border: 1px solid #dddddd">
                <tr>
                    <th style="text-align: left; padding: 8px; font-weight: normal; background: #eee; border-right: solid thin #ddd" >{{ $t('order.print.product') }}</th>
                    <th style="text-align: left; padding: 8px; font-weight: normal; background: #eee; border-right: solid thin #ddd; width: 100px" >{{ $t('order.print.price') }}</th>
                    <th style="text-align: left; padding: 8px; font-weight: normal; background: #eee; border-right: solid thin #ddd; width: 100px" >{{ $t('order.print.quantity') }}</th>
                    <th style="text-align: left; padding: 8px; font-weight: normal; background: #eee; width: 100px" >{{ $t('order.print.total') }}</th>
                </tr>
                <tr v-for="(item, index) in orderItems" :key="index" >
                    <td style="text-align: left; padding: 8px; border-right: solid thin #ddd" >{{ item.product }}</td>
                    <td style="text-align: left; padding: 8px; border-right: solid thin #ddd" >{{ $filters.currency(item.price) }}</td>
                    <td style="text-align: left; padding: 8px; border-right: solid thin #ddd" >{{ item.quantity }}</td>
                    <td style="text-align: left; padding: 8px" >{{ $filters.currency(item.price * item.quantity) }}</td>
                </tr>
            </table>
            <table style="border-collapse: collapse;width: 100%;border: 1px solid #dddddd">
                <tr>
                    <td style="text-align: right; padding: 8px; background: #eee" >
                        {{ $t('order.print.total') }}:
                        <strong>{{ $filters.currency(order.totalPrice) }}</strong>
                    </td>
                </tr>
            </table>
        </div>
        <app-button @click.prevent="onPrint" class="mt-5">
            <PrinterIcon class="h-5" />
            {{ $t('button.print') }}
        </app-button>
    </div>
</template>

<script setup lang="ts">
import type ProductItemInterface from "@/app/product/interfaces/product.item.interface"
import type OrderProductInterface from "@/app/order/interfaces/order.product.interface"
import type OrderInterface from "@/app/order/interfaces/order.interface"
import {PrinterIcon} from "@heroicons/vue/24/outline"
import AppButton from "@/components/button/AppButton.vue"
import useProductStore from "@/stores/product.store"
import {computed, onMounted} from "vue"
import {storeToRefs} from "pinia"

const props = defineProps<{
    order: OrderInterface
}>()

const {products} = storeToRefs(useProductStore())
const orderItems = computed(() => props.order.items.map((i: OrderProductInterface) => ({
    ...i,
    product: products.value.find((p: ProductItemInterface) => p.id === i.product)?.name || "-"
})))

const onPrint = () => {
    const mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

    mywindow.document.write(`<html><head><title>${props.order.code}</title>`)
    mywindow.document.write('</head><body >')
    mywindow.document.write(document.getElementById("print").innerHTML)
    mywindow.document.write('</body></html>')

    mywindow.document.close()
    mywindow.focus()

    mywindow.print()
    mywindow.close()
}

onMounted(onPrint)
</script>