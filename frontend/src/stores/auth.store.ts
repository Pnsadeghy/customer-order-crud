import { defineStore } from 'pinia'
import { ref } from 'vue'
import authApi from "@/app/auth/services/auth.api";

const useAuthStore = defineStore("auth", () => {
    const authToken = ref<string|null>(null)

    const checkAuth = () => {}

    const login = (data: {username: string, password: string}) => new Promise<void>((resolve, reject) => {
        authApi.login(data).then((res: any) => {
            console.log(res.data)
            reject()
        }).catch(reject)
    })

    return {
        authToken,

        isLoggedIn: () => authToken.value !== null,
        checkAuth,
        login
    }
})

export default useAuthStore