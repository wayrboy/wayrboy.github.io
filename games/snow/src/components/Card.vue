<template>
  <div class="card shadow">
    <div class="flex">
      <div class="left">
        <pickupBtn :name="title" resource="wood" />
      </div>

      <div class="right">
        <ScienceBtn name="点击伐木数量" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import pickupBtn from './Card/PickupBtn/pickupBtn.vue'
import ScienceBtn from './Card/ScienceBtn/ScienceBtn.vue'
import { useScienceStore } from '@/stores/counter'

let prop = defineProps(['title'])

const science = useScienceStore()
</script>

<style>
button:hover {
  cursor: pointer;
}
</style>

<style scoped>
.flex {
  display: flex;
}

.shadow {
  box-shadow: 0 0 10px;
  border-radius: 10px;
}

.right {
  margin-left: 10px;
  background-color: skyblue;
  width: 90%;
  display: flex;
  gap: 10px;
}

div {
  margin-top: 10px;
}

.card {
  background-color: skyblue;
  padding: 20px;
}

button {
  font-size: 2rem;
  position: relative;
  border-radius: var(--radius);
}

.progress {
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: stretch;
  border: 1px solid green;
  display: none;
  width: 0;
  background-color: aquamarine;
  transition: width 0.3s;
}

.tips {
  position: relative;
}

.tips:hover .tipPanel {
  opacity: 1;
}

.tipPanel {
  position: absolute;
  border-radius: 5px;
  background-color: #666;
  border: 1px solid salmon;
  color: white;
  padding: 20px;
  width: 150%;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  transition: opacity 0.3s;
  font-size: 20px;
  opacity: 0;
  /* display: none; */
}

.resourcesIcon {
  width: 20px;
}
</style>
