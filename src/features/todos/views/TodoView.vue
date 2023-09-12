<template>
  <div>
    <TodoList
      :todos="todos"
      @remove-todo="onTodoRemoveClicked"
      @add-todo="onAddToClicked"
    ></TodoList>
    {{ todos }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TodoList from '../components/TodoList.vue'
import { TodoListModel, TodoListItemModel } from '../models/TodoListModel'

const todos = ref<Array<TodoListItemModel>>([])

//Skapar en ny Model
const myTodoModel = new TodoListModel()
onMounted(() => {
  //Laddar alla todos
  myTodoModel.load()

  //"Binder" todos för att vara reaktiva
  todos.value = myTodoModel.items
})

const onTodoRemoveClicked = (todo: TodoListItemModel): void => {
  //tar bort den todo du tryckte remove på
  myTodoModel.remove(todo)

  //laddar om den uppdaterade listan
  todos.value = myTodoModel.items
}
const onAddToClicked = (todo: string): void => {
  //Lägger till en ny todo
  myTodoModel.add(todo)

  //laddar om den uppdaterade listan
  todos.value = [...myTodoModel.items]
}
</script>
