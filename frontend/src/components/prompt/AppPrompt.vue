<template>
  <TransitionRoot :show="show" as="div" class="relative z-80" >
      <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50" />
      </TransitionChild>
      <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                  as="template"
                  enter="duration-300 ease-out"
                  enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100"
                  leave="duration-200 ease-in"
                  leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95"
              >
                  <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                      <div class="sm:flex sm:items-start">
                          <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                              <component :is="iconComponent" :class="iconClass" class="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                              <h3 class="text-base font-semibold leading-6 text-gray-900">{{ prompt.title }}</h3>
                              <div class="mt-2">
                                  <p class="text-sm text-gray-500" v-html="prompt.message" ></p>
                              </div>
                          </div>
                      </div>
                      <div class="mt-5 sm:mt-4 sm:flex sm:gap-x-2 sm:flex-row-reverse sm:space-y-0 space-y-2">
                          <app-button theme="outline-secondary" @click.prevent="onReject">
                              {{ prompt.rejectText }}
                          </app-button>
                          <app-button :theme="confirmTheme" @click.prevent="onConfirm">
                              {{ prompt.confirmText }}
                          </app-button>
                      </div>
                  </div>
              </TransitionChild>
          </div>
      </div>
  </TransitionRoot>
</template>
<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild
} from '@headlessui/vue'
import {CheckCircleIcon, ExclamationTriangleIcon} from "@heroicons/vue/24/outline"
import type PromptInterface from "./interfaces/prompt.interface"
import {computed, onBeforeUnmount, onMounted, ref} from "vue"
import AppButton from "@/components/button/AppButton.vue"
import {PROMPT_OPEN_EVENT} from "./utils/prompt.utils"
import eventUtils from "@/utils/event.utils"

const prompt = ref<PromptInterface|null>(null)
const show = ref<boolean>(false)

const onOpenPrompt = (data: PromptInterface) => {
    prompt.value = data
    show.value = true
}

const iconComponent = computed(() => {
    switch (prompt.value?.theme) {
        case "success":
            return CheckCircleIcon
        default:
            return ExclamationTriangleIcon
    }
})
const iconClass = computed(() => {
    switch (prompt.value?.theme) {
        case "success":
            return "text-green-600"
        default:
            return "text-red-600"
    }
})

const confirmTheme = computed(() => {
    switch (prompt.value?.theme) {
        case "success":
            return "primary"
        default:
            return "danger"
    }
})

const onConfirm = () => {
    if (prompt.value?.confirm) prompt.value?.confirm()
    show.value = false
}

const onReject = () => {
    if (prompt.value?.reject) prompt.value?.reject()
    show.value = false
}

onMounted(() => {
    eventUtils.on(PROMPT_OPEN_EVENT, onOpenPrompt)
})
onBeforeUnmount(() => {
    eventUtils.off(PROMPT_OPEN_EVENT, onOpenPrompt)
})
</script>