<script setup lang="ts">
import AppNotificationManager from "@/components/notification/AppNotificationManager.vue"
import useAuthStore from "@/stores/auth.store"
import {useRoute, useRouter} from "vue-router"
import {LOGIN_PAGE} from "@/router/names"
import appUtils from "@/utils/app.utils"
import {useI18n} from "vue-i18n"

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const i18n = useI18n()

authStore.checkAuth()
appUtils.isLoggedIn = () => authStore.isLoggedIn()
appUtils.authToken = () => authStore.authToken
appUtils.translate = i18n.t
appUtils.logout = () => {
    if (route.name === LOGIN_PAGE) return
    authStore.logout()
    router.push({name: LOGIN_PAGE})
}
</script>

<template>
  <router-view />
  <app-notification-manager />
</template>

