<template>
  <app-page-header :title="$t('order.list.title')" >
      <app-button-new :to="{name: ORDER_NEW_PAGE}" >{{ $t('order.new.link') }}</app-button-new>
  </app-page-header>
    <order-table />
</template>
<script setup lang="ts">
import AppPageHeader from "@/components/page-header/AppPageHeader.vue"
import AppButtonNew from "@/components/button/AppButtonNew.vue"
import OrderTable from "@/app/order/OrderTable.vue"
import {ORDER_NEW_PAGE} from "@/router/names"
</script>