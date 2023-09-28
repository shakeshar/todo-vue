<template>
  <div class="todo-list">
    <h1>My to do list</h1>

    <ul>
      <li v-for="todo in _todos" :key="todo.id">
        {{ todo.text }}
        <button @click="onRemoveTodo(todo)" :style="{ backgroundColor: todo.color }">Ta bort</button>
     {{ todo.color }}
      </li>
    </ul>

    <div class="todo-input">
      <input v-model="newTodoText" placeholder="Ny text" />
      <button @click="onAddTodo">Lägg till</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, PropType} from 'vue'
import { TodoListItemModel } from '../models/TodoListModel'

const newTodoText = ref('')
const props = defineProps({
  todos: {
    type: Array as PropType<TodoListItemModel[]>,
    required: true
  }
})


const _todos = computed<TodoListItemModel[]>( () =>  props.todos);

const emit = defineEmits<{
  (e: 'removeTodo', todo: TodoListItemModel): void
  (e: 'addTodo', todo: string): void
}>()

const onRemoveTodo = (todo: TodoListItemModel): void => {
  emit('removeTodo', todo)
}
const onAddTodo = (): void => {
  emit('addTodo', newTodoText.value)
  newTodoText.value = ''
}
</script>

<style scoped>
.todo-list {
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid #eee;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}

.todo-input {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  margin-right: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
