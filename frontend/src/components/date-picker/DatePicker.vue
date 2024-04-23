<template>
  <div class="date-picker">
    <FormKit
      :name="name"
      :validation="required ? 'required' : ''"
      :modelValue="showValue"
      outer-class="hidden"
    />
    <label class="formkit-label" v-if="name && label" :for="name">{{ label }}</label>
    <DatePicker v-model="value" :attributes="attributes" :min-date="minDate"
                :mode="withTime ? 'dateTime' : 'date'"
                hide-time-header>
      <template #default="{ togglePopover, hidePopover }">
        <button
          :disabled="disabled"
          @click.prevent="onToggle(togglePopover, hidePopover)"
          :class="inputClass"
          class="date-picker_button !flex justify-between gap-3 items-center formkit-input"
        >
          <span>{{ showValue }}</span>
            <CalendarDaysIcon class="w-5 h-5 text-gray-500 block" />
        </button>
      </template>
      <template #footer>
        <div class="w-full px-4 pb-3">
          <button
            @click.prevent="onClear"
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full px-3 py-1 rounded-md"
          >
            {{ $t('button.clear') }}
          </button>
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<script setup lang="ts">
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'
import { dateFormat } from '@/utils/date.utils'
import { ref, watch, computed } from 'vue'
import { DatePicker } from 'v-calendar'
import { FormKit } from '@formkit/vue'
import 'v-calendar/style.css'

const model = defineModel<string>()

interface componentProps {
  inputClass?: string
  minDate?: any
  name: string
  label: string
  required?: boolean
  disabled?: boolean,
  withTime?: boolean
}
const props = defineProps<componentProps>()
const value = ref<string>('')
const showValue = computed(() => getValue(value.value))
let closeMethod: any = null
let isUpdated: boolean = false
const attributes = ref([
  {
    highlight: 'gray',
    dates: new Date()
  }
])

const onToggle = (togglePopover: any, hidePopover: any) => {
  closeMethod = hidePopover
  togglePopover()
}
const onClear = () => {
  value.value = ''
  if (closeMethod) closeMethod()
}

const getValue = (v) => v ? dateFormat(v, props.withTime ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD') : ''

watch(value, (newValue) => {
  isUpdated = true
  model.value = getValue(newValue)
})

watch(
  model,
  (newValue) => {
    if (isUpdated) {
      isUpdated = false
      return
    }
    value.value = newValue ? new Date(newValue).toISOString() : ''
  },
  { immediate: true }
)
</script>

<style lang="scss">
.date-picker {
  [data-invalid='true'] {
    & ~ label {
      @apply text-red-500;
    }
    & ~ .date-picker_button {
      @apply ring-red-500 ring-2;
    }
  }
}
</style>
