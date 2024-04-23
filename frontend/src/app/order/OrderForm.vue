<template>
  <app-form :loading="loading" @submit="onSubmit">
      <div class="md:grid grid-cols-2 gap-2" >
          <form-kit name="customer"
                    :label="$t('order.form.customer')"
                    validation="required"
                    v-model="customer" />
          <date-picker name="date"
                       :label="$t('order.form.date')"
                       with-time
                       v-model="date"/>
      </div>

      <form-kit name="address"
                :label="$t('order.form.address')"
                validation="required"
                type="textarea" rows="2"
                v-model="address" />

      <order-form-products v-model="products" class="mb-4" />

      <app-button submit :loading="loading">
          {{ $t(buttonText) }}
      </app-button>
  </app-form>
</template>
<script setup lang="ts">
import type OrderProductInterface from "@/app/order/interfaces/order.product.interface"
import OrderFormProducts from "@/app/order/OrderFormProducts.vue"
import DatePicker from "@/components/date-picker/DatePicker.vue"
import type OrderInterface from "./interfaces/order.interface"
import AppButton from "@/components/button/AppButton.vue"
import AppForm from "@/components/form/AppForm.vue"
import {dateFormat} from "@/utils/date.utils"
import {computed, ref} from "vue"

const props = defineProps<{
    item?: OrderInterface
    api: (data: object) => Promise<object>
}>()
const emits = defineEmits<{
    (e: "success"): void
}>()

const date = ref<string>(dateFormat(new Date().toString(), "YYYY/MM/DD HH:mm"))
const customer = ref<string>("")
const address = ref<string>("")
const products = ref<OrderProductInterface[]>([])
const loading = ref<boolean>(false)

const isInEditMode = computed(() => !!props.item)
const buttonText = computed(() => isInEditMode.value ? "button.update" : "order.new.button")

const onSubmit = () => {
    loading.value = true
    props.api({
        customer: customer.value,
        address: address.value,
        date: date.value,
        items: products.value
    }).then(() => {
        emits("success")
    }).finally(() => {
        loading.value = false
    })
}
</script>