<template>
  <button ref="btn" @click="pickup" :disabled="canWork">
    {{ prop.name }}

    <div ref="progress" class="progress"></div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useResourcesStore, useScienceStore } from '@/stores/counter'

const resources = useResourcesStore()
resources.$subscribe((mutate, state) => {
  localStorage.setItem('resources', JSON.stringify(state.resources))
})

const science = useScienceStore()
science.$subscribe((mutate, state) => {
  localStorage.setItem('science', JSON.stringify(state.pickupWoodNum))
})

const btn = ref()
const progress = ref()

let prop = defineProps(['name', 'resource'])
let canWork = ref(false)

function pickup() {
  let proV = 0
  let timer = setInterval(() => {
    canWork.value = true
    proV += 5

    if (proV >= 100) {
      proV = 0
      canWork.value = false
      resources.addNum(prop.resource)
      science.pickupWoodNum.unlock = true
      clearInterval(timer)
    }

    progress.value.style.width = `${proV}%`
  }, 100)
}
</script>

<style scoped>
/* * {
  box-sizing: border-box;
} */

button {
  position: relative;
  font-size: 2rem;
  border-radius: 5px;
}

.progress {
  position: absolute;
  top: 95%;
  /* border: 3px solid rgb(153, 255, 0); */
  background-color: rgb(153, 255, 0);
  height: 10%;
  width: 0%;
  left: 0%;

  transition: width 0.2s;
}
</style>
