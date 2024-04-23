<template>
    <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="pointer-events-auto max-w-sm overflow-hidden w-full rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="p-4">
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <component v-if="notification.icon"
                                   :is="notification.icon"
                                   class="h-6 w-6 text-green-400" aria-hidden="true" />
                    </div>
                    <div class="w-0 flex-1 pt-0.5" :class="{'ms-3': notification.icon}">
                        <p class="text-sm font-medium text-gray-900" v-html="notification.message" ></p>
                    </div>
                    <div class="ms-4 flex flex-shrink-0">
                        <button type="button" @click="onClose" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="sr-only">Close</span>
                            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import type NotificationInterface from "./interfaces/notification.interface"
import { XMarkIcon } from '@heroicons/vue/20/solid'
import {onMounted, ref} from "vue"

defineProps<{
    notification: NotificationInterface
}>()
const show = ref<boolean>(false)
let timer = null
const emits = defineEmits<{
    (e: "close"): void
}>()
const onClose = () => {
    clearTimeout(timer)
    show.value = false
    setTimeout(() => {
        emits("close")
    }, 1000)
}
onMounted(() => {
    show.value = true
    timer = setTimeout(onClose, 5000)
})
</script>