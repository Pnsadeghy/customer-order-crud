<template>
  <app-table :schema="orderTableSchema" />
</template>
<script setup lang="ts">
import orderTableSchema from "./schema/order.table.schema"
import AppTable from "@/components/table/AppTable.vue"
</script>