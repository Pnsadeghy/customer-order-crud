<template>
  <app-loader :loader="loader" @reload="getData">
      <slot />
  </app-loader>
</template>
<script setup lang="ts">
import {generateLoader} from "./utils/loader.utils"
import AppLoader from "./AppLoader.vue"
import {onMounted} from "vue"

const loader = generateLoader()
interface componentProps {
    api: any
}
const emits = defineEmits<{
    (e: "loaded", value: any): void
    (e: "failed"): void
}>()
const props = defineProps<componentProps>()
const getData = () => {
    loader.startLoading()
    props.api().then((res: any) => {
        emits("loaded", res.data)
        loader.onSuccess()
    }).catch((e: any) => {
        emits("failed")
        loader.onFail(e)
    })
}
onMounted(getData)
</script>