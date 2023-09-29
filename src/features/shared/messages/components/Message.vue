<template>
  <div class="message-container">
    <h1>{{ props.joline }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  joline: {
    type: String,
    required: true
  }
})
</script>

<style>
.message-container {
  background-color: blue;
}
</style>
