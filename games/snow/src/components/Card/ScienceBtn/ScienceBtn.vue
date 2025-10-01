<template>
  <button @click="" @mouseenter="tooltipShow = true" @mouseleave="tooltipShow = false">
    <img :src="icon" alt="" />
    <Tooltip tooltip="这是一个工具提示" v-if="tooltipShow" />
  </button>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useIconsStore, useScienceStore } from '@/stores/counter'
import Tooltip from '../../Tooltip/Tooltip.vue'

let tooltipShow = ref(false)

let icon: string

const prop = defineProps(['name'])

if ((prop.name as string).indexOf('伐木')) {
  icon = useIconsStore().value.wood
}
</script>

<style scoped>
button {
  position: relative;
}
</style>
