import {apiInstance} from "@/utils/api.utils"

const authApi = {
    login: (data: {username: string, password: string}) => apiInstance.post("auth/login", data),
    register: (data: {email: string, username: string, password: string}) => apiInstance.post("auth/register", data)
}

export default authApi