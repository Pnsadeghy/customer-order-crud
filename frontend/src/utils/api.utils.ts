import {apiErrorNotification, errorNotification} from "@/components/notification/utils/notification.utils"
import axios, {
    type AxiosInstance,
    type InternalAxiosRequestConfig,
    type AxiosError,
    type AxiosResponse
} from "axios"
import type ApiErrorInterface from "./interfaces/api.error.interface"
import appUtils from "./app.utils"

export const apiInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 100000,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
})

apiInstance.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
        const authToken = appUtils.authToken()

        if (!config.headers['Authorization'] && authToken !== null)
            config.headers['Authorization'] = `Bearer ${authToken}`

        return config
    },
    function (error: AxiosError) {
        return Promise.reject(error)
    }
)

apiInstance.interceptors.response.use(
    function (response: AxiosResponse) {
        return response
    },
    function (error: AxiosError) {
        const status = +error.response?.status
        let message = ""
        if (status === 401) {
            errorNotification("message.logout")
            appUtils.logout()
        } else
            message = error.response?.data?.message ||
                appUtils.translate('error.' + ([404, 400, 410, 500, 422].includes(status) ? status : 500))
        let errors: any[] = []
        if (error.response?.data?.errors)
            for (const key in error.response?.data?.errors)
                errors = [...errors, error.response?.data?.errors[key]]
        const errorResponse: ApiErrorInterface = {
            message,
            status,
            errors
        }
        apiErrorNotification(errorResponse)
        return Promise.reject(errorResponse)
    }
)

