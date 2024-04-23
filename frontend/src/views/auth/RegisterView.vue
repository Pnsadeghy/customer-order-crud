<template>
    <auth-page-layout :title="$t('auth.register.title')">
        <template #link>
            <auth-back-link link="auth.login.link.link"
                            text="auth.login.link.text"
                            :to="{name: LOGIN_PAGE}" />
        </template>
        <auth-register-form @success="onRegistered" />
    </auth-page-layout>
</template>
<script setup lang="ts">
import {successNotification} from "@/components/notification/utils/notification.utils"
import AuthPageLayout from "@/app/layout/auth-page-layout/AuthPageLayout.vue"
import AuthRegisterForm from "@/app/auth/AuthRegisterForm.vue"
import {DASHBOARD_PAGE, LOGIN_PAGE} from "@/router/names"
import AuthBackLink from "@/app/auth/AuthBackLink.vue"
import {useRouter} from "vue-router"

const router = useRouter()
const onRegistered = () => {
    successNotification("auth.register.message")
    router.push({name: DASHBOARD_PAGE})
}
</script>