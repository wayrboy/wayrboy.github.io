<script setup lang="ts">
import Card from './components/Card.vue';
import { useScienceStore } from '@/stores/counter'

const science = useScienceStore()

</script>


<template>
  <Card />

  <Card v-if="science.smithy" />

</template>


<style scoped></style>
