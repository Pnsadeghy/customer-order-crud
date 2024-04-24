<template>
  <div class="fixed end-4 top-4 space-y-4 w-72 max-w-[80%] z-50" >
      <app-notification v-for="item in list"
                        :key="item.id"
                        :notification="item"
                        @close="closeNotification(item)"/>
  </div>
</template>

<script setup lang="ts">
import {CheckCircleIcon, ExclamationCircleIcon, XCircleIcon} from "@heroicons/vue/24/outline"
import type NotificationInterface from "./interfaces/notification.interface"
import NotificationTypeEnum from "./enum/notification.type.enum"
import {NOTIFICATION_EVENT} from "./utils/notification.utils"
import {onBeforeUnmount, onMounted, reactive} from "vue"
import AppNotification from "./AppNotification.vue"
import {generateUUID} from "@/utils/string.utils"
import eventUtils from "@/utils/event.utils"

const list = reactive<NotificationInterface[]>([])
const icons = {
    [NotificationTypeEnum.Success]: CheckCircleIcon,
    [NotificationTypeEnum.Warning]: ExclamationCircleIcon,
    [NotificationTypeEnum.Danger]: XCircleIcon
}

const showNotification = (notification: NotificationInterface) => {
    notification.id = generateUUID()
    notification.icon = icons[notification.type]
    list.unshift(notification)
}
const closeNotification = (notification: NotificationInterface) => {
    list.splice(list.indexOf(notification), 1)
}

onMounted(() => {
    eventUtils.on(NOTIFICATION_EVENT, showNotification)
})
onBeforeUnmount(() => {
    eventUtils.off(NOTIFICATION_EVENT, showNotification)
})
</script>