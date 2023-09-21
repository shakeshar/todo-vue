<template>
  <div>
    <Profile
      :todos="todos"
      @remove-todo="onTodoRemoveClicked"
      @add-todo="onAddToClicked"
    ></Profile>
    {{ todos }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Profile from '../components/Profile.vue'
import { ProfileModel, ProfileItemModel } from '../models/ProfileModel'

const todos = ref<Array<ProfileItemModel>>([])

//Skapar en ny Model
const myTodoModel = new ProfileModel()
onMounted(() => {
  //Laddar alla todos
  myTodoModel.load()

  //"Binder" todos för att vara reaktiva
  todos.value = myTodoModel.items
})

const onTodoRemoveClicked = (todo: ProfileItemModel): void => {
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
