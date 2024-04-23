<template>
  <app-form :id="id" :loading="loading" @submit="onSubmit">
      <slot :loading="loading" />
  </app-form>
</template>
<script setup lang="ts">
import type {AxiosResponse} from "axios"
import AppForm from "./AppForm.vue"
import {defineModel, ref} from "vue";
const props = defineProps<{
    id?: string
    api: (data: object) => Promise<AxiosResponse<any>>
    submitChecker?: (data: object) => boolean
}>()
const emits = defineEmits<{
    (e: "success", value: object): void
    (e: "fail"): void
}>()
const loading = defineModel("loading", {default: false})
const onSubmit = async (data: object) => {
    if (props.submitChecker && !props.submitChecker(data)) return
    loading.value = true
    try {
        const response = await props.api(data)
        emits("success", response["data"])
    } catch (e: object) {
        emits("fail")
    }
    loading.value = false
}
</script>