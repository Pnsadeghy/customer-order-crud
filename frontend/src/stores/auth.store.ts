import { defineStore } from 'pinia'
import { ref } from 'vue'
import authApi from "@/app/auth/services/auth.api";
import {getCookie, removeCookie, setCookie} from "@/utils/cookie.utils";

const AUTH_COOKIE_KEY = "ccva_2024"

const useAuthStore = defineStore("auth", () => {
    const authToken = ref<string|null>(null)

    const checkAuth = () => {
        const cache = getCookie(AUTH_COOKIE_KEY)
        if (!cache) return
        authToken.value = cache
    }

    const login = (data: {username: string, password: string}) => new Promise<object>((resolve, reject) => {
        authApi.login(data).then((res: { data: {token: string} }) => {
            authToken.value = res.data.token
            saveAuthInCache()
            resolve(res)
        }).catch(reject)
    })
    const logout = () => {
        authToken.value = null
        removeCookie(AUTH_COOKIE_KEY)
    }

    const saveAuthInCache = () => {
        setCookie(AUTH_COOKIE_KEY, authToken.value)
    }

    return {
        authToken,

        isLoggedIn: () => authToken.value !== null,
        checkAuth,
        login,
        logout
    }
})

export default useAuthStore