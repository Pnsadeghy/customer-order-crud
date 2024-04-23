<template>
    <app-loading-content :loading="loading">
        <form-kit :id="id" type="form"
                  @submit-invalid="onError"
                  @submit="v => emits('submit', v)"
                  :actions="false">
            <slot />
        </form-kit>
    </app-loading-content>
</template>

<script setup lang="ts">
import {errorNotification} from "../notification/utils/notification.utils"
import AppLoadingContent from "../loading-content/AppLoadingContent.vue"

defineProps<{
    id?: string
    loading: boolean
}>()
const emits = defineEmits<{
    (e: "submit", value: object): void
}>()
const onError = () => {
    errorNotification("error.form.invalid")
}
</script>