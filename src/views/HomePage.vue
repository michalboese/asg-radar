<script setup>
import { computed, ref } from 'vue'
import SidebarLayout from '@/layouts/SidebarLayout.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import EventCard from '@/components/EventCard.vue'

import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()

const eventCollection = useCollection(collection(db, 'events'))

const filterParams = ref({
  date: '',
  name: '',
  location: '',
  favorite: false,
})

const filteredEvents = computed(() => {
  return eventCollection.value.filter((event) => {
    return (
      event.name.toLowerCase().includes(filterParams.value.name.toLowerCase()) &&
      event.location.toLowerCase().includes(filterParams.value.location.toLowerCase()) &&
      (filterParams.value.favorite ? event.favorite : true)
    )
  })
})
</script>

<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <BaseContainer>
        <h2 class="mb-4">Filtry</h2>
        <BaseForm>
          <v-date-picker class="mb-8" color="#3D4731" width="430"></v-date-picker>
          <BaseInput v-model="filterParams.name" label="Nazwa" />
          <BaseInput v-model="filterParams.location" label="Lokalizacja" />
          <BaseCheckbox v-model="filterParams.favorite" label="Ulubione" />
        </BaseForm>
      </BaseContainer>
    </template>
    <template v-slot:main>
      <BaseContainer>
        <h2 class="mb-4">Treningi</h2>
        <EventCard
          v-for="event in filteredEvents"
          v-bind="event"
          :docId="event.id"
          :key="event.id"
        />
      </BaseContainer>
    </template>
  </SidebarLayout>
</template>

<style></style>
