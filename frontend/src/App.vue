<script setup lang="ts">
import useAuthStore from "@/stores/auth.store"
import appUtils from "@/utils/app.utils"

const authStore = useAuthStore()
authStore.checkAuth()
appUtils.isLoggedIn = () => authStore.isLoggedIn()
appUtils.authToken = () => authStore.authToken
</script>

<template>
  <router-view />
</template>

