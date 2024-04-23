<template>
  <auth-page-layout title="Login">
      <login-form @success="onLoggedIn" />
  </auth-page-layout>
</template>
<script setup lang="ts">
import AuthPageLayout from "@/app/layout/auth-page-layout/AuthPageLayout.vue"
import LoginForm from "@/app/auth/LoginForm.vue"
import {DASHBOARD_PAGE} from "@/router/names"
import {useRouter} from "vue-router"

const router = useRouter()
const onLoggedIn = () => {
    router.push({name: DASHBOARD_PAGE})
}
</script>