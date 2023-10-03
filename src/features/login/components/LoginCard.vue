<template>
  <div class="user-card">
    <img :src="props.card.imageUrl" alt="User Image" class="user-image" />
    <div class="user-info">
      <h2>{{ props.card.firstname }} {{ props.card.lastname }}</h2>
    </div>

    <div class="stats">
      <div>
        <span class="stat-number">Followers</span>
        <span class="stat-label">{{ props.card.count }}</span>
      </div>
      <div>
        <span class="stat-number">Following</span>
        <span class="stat-label">{{ props.card.following }}</span>
      </div>
      <div>
        <span class="stat-number">Count</span>
        <span class="stat-label">{{ props.card.followers }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import LoginCardModel from '../models/LoginCardModel'

const newTodoText = ref('')
const props = defineProps({
  card: {
    type: LoginCardModel,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'addTodo', todo: string): void
}>()

onMounted(() => {
  console.log('ProfileCard loaded.')
})
</script>
<style scoped>
.user-card {
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.user-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.user-info {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
}

.stat-number {
  font-weight: bold;
}

.stat-label {
  color: #777;
}
</style>
