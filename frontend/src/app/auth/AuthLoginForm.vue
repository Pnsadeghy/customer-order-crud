<template>
  <app-form-api :api="login" @success="emits('success')" v-slot="{loading}">
      <form-kit name="username"
                :label="$t('label.username')"
                validation="required"
      />
      <form-kit name="password"
                :label="$t('label.password')"
                type="password"
                validation="required"
      />
      <app-button submit :loading="loading" class="w-full">
          {{ $t('auth.login.button') }}
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