import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScienceStore = defineStore('science', () => {
  const autoWood = false
  const smithy = false

  return { autoWood, smithy }
})
