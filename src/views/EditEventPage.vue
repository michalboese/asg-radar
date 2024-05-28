<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { doc, updateDoc } from '@firebase/firestore'
import { useDocument, useFirestore } from 'vuefire'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import FormLayout from '@/layouts/FormLayout.vue'

const db = useFirestore()
const route = useRoute()
const docRef = doc(db, 'events', route.params.id)

const eventSource = useDocument(docRef)

const editEvent = ref({
  name: '',
  location: 'United States',
  rating: 0,
  price: 1,
  description: '',
  favorite: true,
})

watch(eventSource, (eventSource) => {
  editEvent.value = {
    ...eventSource,
  }
})

async function updateEvent() {
  await updateDoc(docRef, {
    ...editEvent.value,
  })
}
</script>

<template>
  <FormLayout>
    <template v-slot:title>
      <h1 class="mb-4">Edit {{ eventSource?.name ? eventSource.name : '' }}</h1>
    </template>
    <template v-slot:content>
      <BaseCard variant="tonal" color="#6B4226">
        <template v-slot:default>
          <BaseForm v-if="editEvent">
            <BaseInput v-model="editEvent.name" label="Name" required placeholder="ASG" />
            <BaseInput v-model="editEvent.location" label="Location" required />
            <BaseInput
              v-model.number="editEvent.price"
              label="Price"
              type="number"
              min="1"
              max="4"
              required
            />
            <BaseInput
              v-model="editEvent.rating"
              label="Rating"
              type="number"
              min="0"
              max="5"
              step="0.5"
              required
            />
            <BaseInput v-model="editEvent.description" label="Description" />
            <BaseCheckbox v-model="editEvent.favorite" label="Favorite" />
          </BaseForm>
        </template>
        <template v-slot:actions>
          <BaseButton @click="updateEvent" variant="tonal" color="success">
            Save Changes
          </BaseButton>
          <BaseButton to="/" variant="tonal" color="error" outline> Cancel </BaseButton>
        </template>
      </BaseCard>
    </template>
  </FormLayout>
</template>

<style></style>
