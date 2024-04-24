<template>
  <app-page-header :title="$t('order.new.title')">
      <app-panel-header-back-link :to="{name: DASHBOARD_PAGE}" />
  </app-page-header>
  <app-card class="p-4" >
      <order-form :api="orderApi.store" @success="onCreated" />
  </app-card>
</template>
<script setup lang="ts">
import AppPanelHeaderBackLink from "@/components/page-header/AppPanelHeaderBackLink.vue"
import {successNotification} from "@/components/notification/utils/notification.utils"
import AppPageHeader from "@/components/page-header/AppPageHeader.vue"
import orderApi from "@/app/order/services/order.api"
import AppCard from "@/components/card/AppCard.vue"
import OrderForm from "@/app/order/OrderForm.vue"
import {DASHBOARD_PAGE} from "@/router/names"
import {useRouter} from "vue-router"

const router = useRouter()

const onCreated = () => {
    successNotification("order.new.message")
    router.push({name: DASHBOARD_PAGE})
}
</script>