import { defineStore } from 'pinia'
import { ref } from 'vue'

const useAuthStore = defineStore("auth", () => {
    const authToken = ref<string|null>(null)

    const checkAuth = () => {}

    return {
        isLoggedIn: () => authToken.value !== null,
        checkAuth
    }
})

export default useAuthStore