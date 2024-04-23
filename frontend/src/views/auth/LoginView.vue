<template>
  <auth-page-layout :title="$t('auth.login.title')">
      <template #link>
          <auth-back-link link="auth.register.link.link"
                          text="auth.register.link.text"
                          :to="{name: REGISTER_PAGE}" />
      </template>
      <auth-login-form @success="onLoggedIn" />
  </auth-page-layout>
</template>
<script setup lang="ts">
import AuthPageLayout from "@/app/layout/auth-page-layout/AuthPageLayout.vue"
import {DASHBOARD_PAGE, REGISTER_PAGE} from "@/router/names"
import AuthLoginForm from "@/app/auth/AuthLoginForm.vue"
import AuthBackLink from "@/app/auth/AuthBackLink.vue"
import {useRouter} from "vue-router"

const router = useRouter()
const onLoggedIn = () => {
    router.push({name: DASHBOARD_PAGE})
}
</script>