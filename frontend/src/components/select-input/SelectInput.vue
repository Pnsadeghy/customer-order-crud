<template>
    <div class="input-container" >
        <FormKit :name="name" type="text" :validation="required ? 'required' : ''" :modelValue="model" outer-class="hidden" />
        <Listbox v-model="model" :disabled="disabled">
            <div class="relative">
                <ListboxButton
                    :id="name"
                    :class="{'selected': !!model}"
                    class="relative w-full cursor-default focus:outline-none text-start formkit-input">
                    <span class="block truncate">{{ label }}</span>
                    <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pe-2"
                    >
                <ChevronDownIcon v-if="!disabled"
                                 class="h-5 w-5 text-gray-400"
                                 aria-hidden="true"
                />
              </span>
                </ListboxButton>
                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ListboxOptions  class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <ListboxOption
                            v-for="item in list"
                            :key="item.id"
                            :value="item.id"
                            v-slot="{ active, selected }"
                            as="template"
                        >
                            <li
                                :class="[
                  active ? 'bg-gray-200 text-black' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
                            >
                <span
                    :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                >{{ item.name }}</span
                >
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>

<script setup lang="ts">
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import {computed} from "vue"
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import type SelectItemInterface from "./interfaces/select.item.interface"
import { FormKit } from '@formkit/vue'

const model = defineModel<string>()

interface componentProps {
    name?: string,
    placeholder?: string
    list: SelectItemInterface[]
    required?: boolean
    disabled?: boolean
}

const props = defineProps<componentProps>()
const label = computed(() =>
    props.list?.find((i: SelectItemInterface) => i.id === model.value)?.name || props.placeholder
)
</script>

<style lang="scss">

</style>