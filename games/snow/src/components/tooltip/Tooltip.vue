<template>
  <div class="tooltip">{{ prop.tooltip }}</div>
</template>

<script setup lang="ts">
let prop = defineProps(['tooltip'])
</script>

<style scoped>
* {
  font-size: 1rem;
}

.tooltip {
  position: absolute;
  pointer-events: none;
  top: 110%;
  /* left: 100px; */
  /* transform: translateX(-50%); */

  border-radius: 5px;
  background-color: #888;
  padding: 10px;

  width: 200px;

  z-index: 1;
}
</style>
