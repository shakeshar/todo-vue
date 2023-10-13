<template>
  <div v-if="isLoading">
    <Message joline="Hej"></Message>

    <h1>User login</h1>
    <LoginCard :card="loginCardItem"></LoginCard>

    <Message joline="Hej då"></Message>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LoginCard from '../components/LoginCard.vue'
import LoginCardModel from '@/features/login/models/LoginCardModel'

import Message from '../../shared/messages/components/Message.vue'
const loginCardItem = ref(new LoginCardModel('',''))
const isLoading = ref(false)
//Skapar en ny Model
onMounted(() => {
  //Laddar alla todos

  loginCardItem.value = new LoginCardModel(
    'https://www.ingmarbergman.se/sites/default/files/styles/gallery/public/dalarna_dalahast_kopia.jpg',
    'Arne'
  )
  isLoading.value = true

  console.log(loginCardItem.value)
  //"Binder" todos för att vara reaktiva
})
</script>
