<template>
    <app-page-header :title="$t('order.show.title')">
        <app-panel-header-back-link :to="{name: DASHBOARD_PAGE}" />
    </app-page-header>
  <app-api-loader :api="apiCall" @loaded="onDataLoaded">
      <order-show v-if="order" :order="order" />
  </app-api-loader>
</template>
<script setup lang="ts">
import AppPanelHeaderBackLink from "@/components/page-header/AppPanelHeaderBackLink.vue"
import type OrderInterface from "@/app/order/interfaces/order.interface"
import AppPageHeader from "@/components/page-header/AppPageHeader.vue"
import AppApiLoader from "@/components/loader/AppApiLoader.vue"
import orderApi from "@/app/order/services/order.api"
import OrderShow from "@/app/order/OrderShow.vue"
import {DASHBOARD_PAGE} from "@/router/names"
import {useRoute} from "vue-router"
import {computed, ref} from "vue"

const route = useRoute()
const id = computed(() => route.params.id)
const order = ref<OrderInterface|null>(null)
const apiCall = () => orderApi.show(id.value)
const onDataLoaded = (data: OrderInterface) => {
    order.value = data
}
</script>