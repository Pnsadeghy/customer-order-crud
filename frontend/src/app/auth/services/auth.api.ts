import {apiInstance} from "@/utils/api.utils"

const authApi = {
    login: (data: {username: string, password: string}) => apiInstance.post("auth/login", data)
}

export default authApi