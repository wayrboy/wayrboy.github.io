<template>
  <div>{{ prop.tooltip }}</div>
</template>

<script setup lang="ts">
let prop = defineProps(['tooltip'])
</script>

<style scoped>
div {
  /* display: none; */
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);

  border-radius: 5px;
  background-color: #888;
  padding: 20px;

  width: 200px;

  z-index: 1;
}
</style>
