<template>
  <div class="card shadow">
    <div class="flex">
      <div class="left">
        <button ref="btn" @click="clickBtn">
          <div ref="progress" class="progress"></div>
          {{ resource.name }}
        </button>
        <h2><img :src="imgFileName" class="resourcesIcon" style="width: 40px;">{{ resource.num }}</h2>
      </div>
      <div class="right" v-if="unlock">
        <button ref="btn" @click="clickBtn" class="tips">
          <div class="tipPanel">手动点击
            <img :src="imgFileName" class="resourcesIcon">数量+1
            <br>
            消耗:{{ needResources }}<img :src="imgFileName" class="resourcesIcon">
          </div>
          伐木数量
        </button>
      </div>
    </div>

  </div>
</template>


<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { useScienceStore } from "@/stores/counter";
import { type IResource, type IScience } from '../types'

let props = defineProps(["title"])
let resource = reactive<IResource>({
  name: props.title,
  num: 0
})


const btn = ref()
const progress = ref()
let unlock = ref(false)
const imgFileName = "../../assets/icons/resources/wood.png"

let needResources = ref(10)

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
      resource.num += 1;
      btn.value.disabled = false;

      if (resource.num >= 1) {
        console.log(123);

        unlock.value = true;
      }
    }


  }, 100);

}

</script>


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
}

div {
  margin-bottom: 10px;
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

.tips .tipPanel {
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
  transition: opacity .3s;
  font-size: 20px;
  opacity: 0;
  /* display: none; */
}

.resourcesIcon {
  width: 20px;
}
</style>
