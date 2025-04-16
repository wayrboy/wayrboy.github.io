<template>
  <div class="card">
    <button ref="btn" @click="clickBtn">
      <div ref="progress" class="progress"></div>
      伐木
    </button>
    <h2>数量{{ num }}</h2>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useScienceStore } from "@/stores/counter";

let num = ref(0)
const btn = ref()
const progress = ref()

const science = useScienceStore()

function clickBtn() {

  btn.value.disabled = true;
  progress.value.style.display = "flex"
  let pro = 0
  let t = setInterval(() => {
    pro += 5
    progress.value.style.width = `${pro}%`;
    if (pro >= 100) {
      pro = 0

      if (!science.autoWood) {
        clearInterval(t)
      }
      progress.value.style.display = "none"
      progress.value.style.width = `0`;
      num.value += 1;
      btn.value.disabled = false;
    }


  }, 100);

}

</script>


<style scoped>
div {
  margin-bottom: 10px;
}

.card {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  font-size: 2rem;
  position: relative;
  border-radius: 5px;
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
</style>
