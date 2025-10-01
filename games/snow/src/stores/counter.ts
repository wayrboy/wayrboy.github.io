import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type IBuilding, type IResource } from '@/types'
import type { forEachChild } from 'typescript'
import { errorMessages } from 'vue/compiler-sfc'

export const useCardStore = defineStore('card', () => {
  interface ICard {
    name: string
    unlock: boolean
  }
  const list = reactive<ICard[]>([
    { name: '木材', unlock: true },
    { name: '铁矿', unlock: false },
    { name: '石矿', unlock: false },
  ])
  return { list }
})

export const useResourcesStore = defineStore('resources', () => {
  const resources =
    reactive<IResource[]>(JSON.parse(localStorage.getItem('resources') as string)) ||
    reactive<IResource[]>([
      { name: '木材', num: 0, pickupNum: 1 },
      { name: '石头', num: 0, pickupNum: 1 },
      { name: '铁', num: 0, pickupNum: 1 },
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
  const pickupWoodNum = reactive<IBuilding>(
    JSON.parse(localStorage.getItem('science') as string) || {
      cost: {
        wood: 10,
      },
      unlock: false,
      level: 0,
    },
  )

  return { pickupWoodNum }
})

export const useBuildingStore = defineStore('building', () => {})

export const useIconsStore = defineStore('icons', () => {
  const value = {
    wood: '../../assets/icons/resources/wood.png',
  }

  return { value }
})

export const useBuildStore = defineStore('build', () => {})
