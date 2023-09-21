<template>
  <div v-if="isLoading">
    <h1>Profile view header</h1>
    <ProfileCard :card="profileCardItem"></ProfileCard>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProfileCard from '../components/ProfileCard.vue'
import ProfileCardModel from '@/features/profiles/models/ProfileCardModel'

const profileCardItem = ref<ProfileCardModel>()
const isLoading = ref(false)
//Skapar en ny Model
onMounted(() => {
  //Laddar alla todos
  console.log('qqqqq')
  profileCardItem.value = new ProfileCardModel(
    'https://www.ingmarbergman.se/sites/default/files/styles/gallery/public/dalarna_dalahast_kopia.jpg',
    'Arne',
    'Anka'
  )

  isLoading.value = true
  console.log(profileCardItem)
  //"Binder" todos för att vara reaktiva
})
</script>
