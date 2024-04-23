<script setup lang="ts">
interface componentProps {
    loading: boolean
}
defineProps<componentProps>()
</script>

<template>
    <div class="loading-box" :class="{ loading: loading }">
        <slot />
    </div>
</template>

<style lang="scss">
.loading-box.loading{
  @apply relative opacity-80;
  &:after{
    content: '';
    @apply absolute top-0 start-0 z-10 w-full h-full cursor-wait;
  }
}
</style>
