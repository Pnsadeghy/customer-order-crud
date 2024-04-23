<template>
  <app-card class="p-4" >
      <app-page-header :title="`#${order.code}`">
          <app-button
                  shape="default icon" size="small" theme="outline-secondary"
                  v-if="editMode" @click.prevent="editMode = false">
              <ChevronLeftIcon />
          </app-button>
          <template v-else >
              <app-button @click.prevent="editMode = true" shape="default icon" size="small" >
                  <PencilIcon />
              </app-button>
              <app-button shape="default icon" size="small" theme="outline-secondary" >
                  <PrinterIcon />
              </app-button>
          </template>
      </app-page-header>

      <order-form v-if="editMode"
                  @success="onUpdated"
                  :item="order"
                  :api="updateApi" />
      <order-detail v-else :order="order" />
  </app-card>
</template>

<script setup lang="ts">
import {updateNotification} from "@/components/notification/utils/notification.utils"
import type OrderInterface from "@/app/order/interfaces/order.interface"
import AppPageHeader from "@/components/page-header/AppPageHeader.vue"
import {PencilIcon, PrinterIcon} from "@heroicons/vue/24/outline"
import {ChevronLeftIcon} from "@heroicons/vue/24/outline"
import AppButton from "@/components/button/AppButton.vue"
import OrderDetail from "@/app/order/OrderDetail.vue"
import orderApi from "@/app/order/services/order.api"
import AppCard from "@/components/card/AppCard.vue"
import OrderForm from "@/app/order/OrderForm.vue"
import {ref} from "vue"

const editMode = ref<boolean>(false)

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