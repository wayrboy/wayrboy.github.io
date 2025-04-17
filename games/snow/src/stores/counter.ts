import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type IBuilding, type IResource } from '@/types'
import type { forEachChild } from 'typescript'
import { errorMessages } from 'vue/compiler-sfc'

export const useResourcesStore = defineStore('resources', () => {
  const resources =
    reactive<IResource[]>(JSON.parse(localStorage.getItem('resources') as string)) ||
    reactive<IResource[]>([
      { name: 'wood', num: 0, pickupNum: 1 },
      { name: 'stone', num: 0, pickupNum: 1 },
      { name: 'iron', num: 0, pickupNum: 1 },
    ])

  function addNum(name: string, num = -1) {
    resources.forEach((element) => {
      if (element.name == name) {
        element.num += element.pickupNum
      }
    })
  }

  const getNum = (name: string): number => {
    const resource = resources.find((element) => element.name === name)
    return resource ? resource.num : 0
  }

  return { resources, addNum, getNum }
})

export const useScienceStore = defineStore('science', () => {
  const pickupWoodNum: IBuilding = {
    cost: {
      wood: 10,
    },
    unlock: false,
  }
  const v = reactive<Record<string, IBuilding>>({
    pickupWoodNum: { cost: { wood: 10 }, unlock: false },
  })

  const autoWood = false
  const smithy = false

  return { pickupWoodNum, autoWood, smithy, v }
})

export const useBuildingStore = defineStore('building', () => {})

export const useIconsStore = defineStore('icons', () => {
  const value = {
    wood: '../../assets/icons/resources/wood.png',
  }

  return { value }
})

export const useBuildStore = defineStore('build', () => {})
