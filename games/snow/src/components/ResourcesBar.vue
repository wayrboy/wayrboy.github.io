<template>
  <header>
    <div class="flex">
      <div class="resources">
        <img :src="icons.value.wood" style="height: 30px" />
        <div class="num">{{ resource.getNum('wood') }}</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useIconsStore, useResourcesStore } from '@/stores/counter'

const icons = useIconsStore()
const resource = useResourcesStore()
</script>

<style scoped>
.flex {
  display: flex;
  gap: 10px;
  justify-content: center;
  background-color: skyblue;
  border-radius: 5px;
  box-shadow: 0 0 10px;
  padding: 20px;
  position: relative;
}

.resources {
  display: flex;
  align-content: center;
}

.num {
  display: flex;
  align-items: center;
}
</style>
