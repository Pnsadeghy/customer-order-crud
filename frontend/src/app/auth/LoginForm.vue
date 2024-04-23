<template>
  <app-form-api :api="login" @success="emits('success')" v-slot="{loading}">
      <form-kit name="username"
                label="username"
                validation="required"
      />
      <form-kit name="password"
                label="password"
                validation="required"
      />
      <app-button submit :loading="loading">
          Login
      </app-button>
  </app-form-api>
</template>
<script setup lang="ts">
import AppFormApi from "@/components/form/AppFormApi.vue"
import AppButton from "@/components/button/AppButton.vue"
import useAuthStore from "@/stores/auth.store"

const emits = defineEmits<{
    (e: "success"): void
}>()

const {login} = useAuthStore()
</script>