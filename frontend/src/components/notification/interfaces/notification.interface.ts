import type NotificationTypeEnum from "../enum/notification.type.enum"
import {type ComponentOptions} from "vue"

export default interface NotificationInterface {
    id?: string,
    type: NotificationTypeEnum
    message: string
    icon?: ComponentOptions
}