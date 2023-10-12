<template>
  {{ props.card.password }}
</template>

<script setup lang="ts">
import LoginCardModel from '../models/LoginCardModel';

const props = defineProps({
  card: {
    type: LoginCardModel, 
    required: true
  }
})
</script>
<style scoped>
</style>
