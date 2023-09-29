<template>
  <div>
    <Message joline="Hej 2"></Message>
    <TodoList
      :todos="todos"
      @remove-todo="onTodoRemoveClicked"
      @add-todo="onAddToClicked"
    ></TodoList>

    <Message joline="Hej då 2"></Message>
    {{ todos }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import TodoList from '../components/TodoList.vue'
import { TodoListModel, TodoListItemModel } from '../models/TodoListModel'
import Message from '../../shared/messages/components/Message.vue'

const todos = ref<Array<TodoListItemModel>>([])

//Skapar en ny Model
const myTodoModel = new TodoListModel()

onMounted(() => {
  //Laddar alla todos
  myTodoModel.load()

  //"Binder" todos för att vara reaktiva
  todos.value = myTodoModel.items
  console.log('Loaded TodoView.vue')
})

onUnmounted(() => {
  console.log('Unloaded TodoView.vue')
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

<style></style>
