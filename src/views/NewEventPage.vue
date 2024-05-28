<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFirestore } from 'vuefire'
import { collection, addDoc } from 'firebase/firestore'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'

const db = useFirestore()
const router = useRouter()

const newEvent = ref({
  name: '',
  organizer: '',
  date: '',
  shortDescription: '',
  longDescription: '',
  location: 'Opole, Hotel Tenis',
  price: 1,
  favorite: false,
  duration: 1,
  participants: 0,
})

// Add a new document with a generated id.
async function addEvent() {
  const newDoc = await addDoc(collection(db, 'events'), {
    ...newEvent.value,
  })

  if (newDoc.id) {
    router.push('/')
  }
}
</script>

<template>
  <BaseContainer>
    <h1 class="mb-4">New Event</h1>
    <BaseCard variant="tonal" color="#6B4226">
      <template v-slot:default>
        <BaseForm>
          <BaseInput v-model="newEvent.name" label="Nazwa" required placeholder="Trening ASG" />
          <BaseInput
            v-model="newEvent.organizer"
            label="Organizator"
            required
            placeholder="Organizator"
          />
          <BaseInput v-model="newEvent.date" label="Data" type="date" required />
          <BaseInput v-model="newEvent.time" label="Godzina Rozpoczęcia" type="time" required />
          <BaseInput
            v-model="newEvent.shortDescription"
            label="Krótki opis"
            required
            placeholder="Wyświetla się na stronie głównej"
          />
          <BaseInput
            v-model="newEvent.longDescription"
            label="Długi opis"
            required
            placeholder="Wyświetla się na stronie wydarzenia"
          />

          <BaseInput v-model="newEvent.location" label="Lokalizacja" required />
          <BaseInput v-model.number="newEvent.price" label="Cena" type="number" required />
          <BaseInput
            v-model.number="newEvent.duration"
            label="Czas trwania"
            type="number"
            required
          />
          <BaseCheckbox v-model="newEvent.favorite" label="Ulubione" />
        </BaseForm>
      </template>
      <template v-slot:actions>
        <BaseButton @click="addEvent" variant="tonal" color="success"> Add New Event </BaseButton>
        <BaseButton variant="tonal" color="error" outline to="/"> Cancel </BaseButton>
      </template>
    </BaseCard>
  </BaseContainer>
</template>

<style></style>
