<template>
  <app-table-column :label="$t('order.list.code')" class="md:w-32" >{{ item.code }}</app-table-column>
  <app-table-column :label="$t('order.list.customer')">{{ item.customer }}</app-table-column>
  <app-table-column :label="$t('order.list.totalPrice')" class="md:w-32" >{{ item.totalPrice }}</app-table-column>
  <app-table-column :label="$t('order.list.date')" class="md:w-32" >{{ item.date }}</app-table-column>
  <app-table-column class="md:w-32" >
      <app-table-action-column @delete="emits('delete')"
                               :edit-route="{name: ORDER_SHOW_PAGE, params: {id: item.id}}" />
  </app-table-column>
</template>
<script setup lang="ts">
import AppTableActionColumn from "@/components/table/AppTableActionColumn.vue"
import type OrderItemInterface from "./interfaces/order.item.interface"
import AppTableColumn from "@/components/table/AppTableColumn.vue"
import {ORDER_SHOW_PAGE} from "@/router/names";

defineProps<{
    item: OrderItemInterface
}>()
const emits = defineEmits<{
    (e: "delete"): void
}>()
</script>