<template>
  <app-form-api api="" @success="emits('success')" v-slot="{loading}">
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

      <app-button submit :loading="loading">
          {{ $t(buttonText) }}
      </app-button>
  </app-form-api>
</template>
<script setup lang="ts">
import DatePicker from "@/components/date-picker/DatePicker.vue"
import type OrderInterface from "./interfaces/order.interface"
import AppFormApi from "@/components/form/AppFormApi.vue"
import AppButton from "@/components/button/AppButton.vue"
import {computed, ref} from "vue"
import {dateFormat} from "@/utils/date.utils";

const props = defineProps<{
    item?: OrderInterface
}>()
const emits = defineEmits<{
    (e: "success"): void
}>()

const customer = ref<string>("")
const address = ref<string>("")
const date = ref<string>(dateFormat(new Date().toString(), "YYYY/MM/DD HH:mm"))

const isInEditMode = computed(() => !!props.item)
const buttonText = computed(() => isInEditMode.value ? "button.update" : "order.new.button")
</script>