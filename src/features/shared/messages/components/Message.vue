<template>
  <h1>{{ props.joline }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  joline: {
    type: String,
    required: true
  }
})
</script>
