<template>
  <app-page-header :title="$t('order.list.title')" >
      <app-button-new>{{ $t('order.new.link') }}</app-button-new>
  </app-page-header>
    <order-table />
</template>
<script setup>
import AppPageHeader from "@/components/page-header/AppPageHeader.vue"
import OrderTable from "@/app/order/OrderTable.vue"
import AppButtonNew from "@/components/button/AppButtonNew.vue";
</script>