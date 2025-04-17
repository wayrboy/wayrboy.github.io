<script setup lang="ts">
import Card from './components/Card.vue'
import ResourcesBar from './components/ResourcesBar.vue'
import { useScienceStore } from '@/stores/counter'

const science = useScienceStore()
</script>

<template>
  <ResourcesBar />
  <Card title="伐木" />
  <Card title="伐木" />

  <Card title="挖铁" v-if="science.smithy" />
  <Card title="挖石头" v-if="science.smithy" />
</template>

<style scoped></style>
