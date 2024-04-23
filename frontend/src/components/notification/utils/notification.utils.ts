import type NotificationInterface from "../interfaces/notification.interface"
import type ApiErrorInterface from "@/utils/interfaces/api.error.interface"
import NotificationTypeEnum from "../enum/notification.type.enum"
import eventUtils from "@/utils/event.utils"
import appUtils from "@/utils/app.utils"

export const NOTIFICATION_EVENT = "NOTIFICATION_EVENT"

export const storeNotification = () => {
    successNotification("message.store")
}
export const updateNotification = () => {
    successNotification("message.update")
}
export const destroyNotification = () => {
    successNotification("message.destroy")
}

export const successNotification = (message: string, params: object = {}, translate: boolean = true) => {
    showNotification(NotificationTypeEnum.Success, message, params, translate)
}
export const warningNotification = (message: string, params: object = {}, translate: boolean = true) => {
    showNotification(NotificationTypeEnum.Warning, message, params, translate)
}
export const errorNotification = (message: string, params: object = {}, translate: boolean = true) => {
    showNotification(NotificationTypeEnum.Danger, message, params, translate)
}
export const apiErrorNotification = (e: ApiErrorInterface) => {
    let message: string = e['message']!
    if (e['errors'] && e['errors'].length > 0)
        message = `<ul>${e['errors'].map((i: string) => `<li>${i}</li>`).join('')}</ul>`
    errorNotification(message, {}, false)
}
export const showNotification = (type: NotificationTypeEnum, message: string, params: object = {}, translate: boolean = true) => {
    eventUtils.emit(NOTIFICATION_EVENT, {
        type,
        message: translate? appUtils.translate(message, params) : message
    } as NotificationInterface)
}