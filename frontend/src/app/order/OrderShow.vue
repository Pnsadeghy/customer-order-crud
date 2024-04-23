<template>
  <app-card class="p-4" >
      <app-page-header :title="`#${order.code}`">
          <template v-if="tab === TabEnum.Detail" >
              <app-button @click.prevent="tab = TabEnum.Edit" shape="default icon" size="small" >
                  <PencilIcon />
              </app-button>
              <app-button @click.prevent="tab = TabEnum.Print" shape="default icon" size="small" theme="outline-secondary" >
                  <PrinterIcon />
              </app-button>
          </template>
          <app-button
              shape="default icon" size="small" theme="outline-secondary"
              v-else @click.prevent="tab = TabEnum.Detail">
              <ChevronLeftIcon />
          </app-button>
      </app-page-header>


      <order-detail v-if="tab === TabEnum.Detail" :order="order" />
      <order-print v-if="tab === TabEnum.Print" :order="order" />
      <order-form v-if="tab === TabEnum.Edit"
                  @success="onUpdated"
                  :item="order"
                  :api="updateApi" />
  </app-card>
</template>

<script setup lang="ts">
import {updateNotification} from "@/components/notification/utils/notification.utils"
import {PencilIcon, PrinterIcon, ChevronLeftIcon} from "@heroicons/vue/24/outline"
import type OrderInterface from "@/app/order/interfaces/order.interface"
import AppPageHeader from "@/components/page-header/AppPageHeader.vue"
import AppButton from "@/components/button/AppButton.vue"
import OrderDetail from "@/app/order/OrderDetail.vue"
import orderApi from "@/app/order/services/order.api"
import OrderPrint from "@/app/order/OrderPrint.vue"
import AppCard from "@/components/card/AppCard.vue"
import OrderForm from "@/app/order/OrderForm.vue"
import {ref} from "vue"

enum TabEnum {
    Detail,
    Edit,
    Print
}

const tab = ref<TabEnum>(TabEnum.Detail)

const props = defineProps<{
    order: OrderInterface
}>()

const updateApi = (data: object) => orderApi.update(props.order.id, data)

const onUpdated = () => {
    updateNotification()
    setTimeout(() => {
       location.reload()
    }, 1000)
}
</script>