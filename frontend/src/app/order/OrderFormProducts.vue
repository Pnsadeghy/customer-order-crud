<template>
  <div>
      <div class="flex justify-between items-center mb-2" >
          <h3 class="font-semibold" >{{ $t('order.product.title') }}: {{ $filters.currency(totalPrice) }}</h3>
          <app-button shape="default icon" size="small" @click.prevent="addNewProduct">
              <PlusIcon />
          </app-button>
      </div>


      <app-table-container :columns="columns" has-action-column>
          <order-form-products-item v-for="(item, index) in model"
                                    @delete="model.splice(index, 1)"
                                    :products="products"
                                    :key="index"
                                    :removable="isRemovable"
                                    :item="item" />
      </app-table-container>
  </div>
</template>

<script setup lang="ts">
import type TableSchemaColumnInterface from "@/components/table/interfaces/table.schema.column.interface"
import type OrderProductInterface from "./interfaces/order.product.interface"
import OrderFormProductsItem from "@/app/order/OrderFormProductsItem.vue"
import AppTableContainer from "@/components/table/AppTableContainer.vue"
import AppButton from "@/components/button/AppButton.vue"
import useProductStore from "@/stores/product.store"
import {PlusIcon} from "@heroicons/vue/24/outline"
import {computed, onMounted} from "vue"
import {storeToRefs} from "pinia"

const model = defineModel<OrderProductInterface[]>()
const {products} = storeToRefs(useProductStore())

const totalPrice = computed(() =>
    model.value.reduce((sum: number, item: OrderProductInterface) => sum + (item.price && item.quantity ? item.price * item.quantity : 0), 0))
const isRemovable = computed(() => model.value.length > 1)

const columns: TableSchemaColumnInterface[] = [
    {
        name: "order.product.product"
    },
    {
        name: "order.product.product_price"
    },
    {
        name: "order.product.price"
    },
    {
        name: "order.product.quantity"
    },
    {
        name: "order.product.total"
    }
]

const addNewProduct = () => {
    model.value = [
        ...model.value,
        {
            product: '',
            price: null,
            quantity: 1
        }
    ]
}

onMounted(() => {
    if (model.value.length === 0)
        addNewProduct()
})
</script>