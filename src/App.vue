<script setup>
import { RouterView, useRoute } from 'vue-router'
import { useFirebaseAuth } from 'vuefire'
import AppLayout from './layouts/AppLayout.vue'
import AppNavbar from './components/AppNavbar.vue'

const route = useRoute()
const auth = useFirebaseAuth()

console.log(auth)
</script>

<template>
  <AppLayout>
    <template v-slot:topbar>
      <AppNavbar />
    </template>
    <template v-slot:content>
      <Suspense>
        <RouterView :key="route.fullPath" />
        <template v-slot:fallback>
          <p>Nie znaleziono strony</p>
        </template>
      </Suspense>
    </template>
  </AppLayout>
</template>

<style>
.v-application {
  background-color: #eae6d6 !important;
}

/* Scroll bar stylings */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #3d4731;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6b4226;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
