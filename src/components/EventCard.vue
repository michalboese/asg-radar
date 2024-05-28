<script setup>
import { useFirestore } from 'vuefire'
import { deleteDoc, doc } from '@firebase/firestore'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseImageCard from '@/components/base/BaseImageCard.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import EventImage from '@/components/EventImage.vue'

const props = defineProps({
  docId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    default: 'Default description',
  },
  longDescription: {
    type: String,
    default: 'Default description',
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    default: 'United States',
  },
  price: {
    type: Number,
    required: false,
  },
  duration: {
    type: Number,
    required: false,
  },
  participants: {
    type: Number,
    default: 0,
  },
})

const db = useFirestore()

async function deleteCafe() {
  await deleteDoc(doc(db, 'events', props.docId))
}
</script>

<template>
  <BaseImageCard>
    <template v-slot:image>
      <EventImage />
    </template>
    <template v-slot:title>
      {{ name }}
    </template>
    <template v-slot:organizer>{{ organizer }} </template>
    <template v-slot:favorite v-if="favorite">
      <BaseIcon color="error" icon="mdi-fire-circle" size="small" class="mr-1" />
      <span class="mr-1">Ulubione</span>
    </template>
    <template v-slot:shortDescription>
      <p>{{ shortDescription }}</p>
    </template>
    <template v-slot:location> {{ location }}zł </template>
    <template v-slot:date> {{ time }}, {{ date }} </template>
    <template v-slot:participants>Liczba uczestników: {{ participants }} </template>
    <template v-slot:actions>
      <BaseButton color="#6B4226" :to="`/event/${docId}/edit`">
        <BaseIcon icon="mdi-pencil" class="mr-1" /> Edytuj
      </BaseButton>
      <BaseButton @click="deleteCafe" color="#A97142" text>
        <BaseIcon icon="mdi-trash-can-outline" class="mr-1" />
        Usuń
      </BaseButton>
      <BaseButton color="#4B5320" :to="`/event/${docId}`">
        <BaseIcon icon="mdi-location-enter" class="mr-1" /> Wejdź
      </BaseButton>
    </template>
  </BaseImageCard>
</template>

<style></style>
