<script setup lang="ts">
import Card from './components/Card.vue'
import ResourcesBar from './components/ResourcesBar.vue'
import { useCardStore, useResourcesStore, useScienceStore } from '@/stores/counter'

const science = useScienceStore()
// const { resources: s } = useResourcesStore()
const cardList = useCardStore()
</script>

<template>
  <ResourcesBar />

  <Card v-for="c in cardList.list" :title="c.name" />

</template>

<style scoped></style>
