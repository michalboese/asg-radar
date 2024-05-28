<script setup>
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { signOut } from '@firebase/auth'
import BaseButton from './base/BaseButton.vue'

const user = useCurrentUser()
console.log(user)

const auth = useFirebaseAuth()

async function signOutOfFirebase() {
  signOut(auth)
    .then(() => {
      console.log('Logged out!')
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <nav class="pr-2">
    <BaseButton class="mr-3" to="/what-is-asg">Czym jest ASG?</BaseButton>
    <BaseButton class="mr-3" to="/">Wydarzenia</BaseButton>
    <BaseButton class="mr-3" to="/new">Nowe wydarzenie</BaseButton>
    <BaseButton class="mr-3" v-if="user?.email" @click="signOutOfFirebase">Wyloguj</BaseButton>
    <BaseButton class="mr-3" v-else to="/sign-in">Zaloguj</BaseButton>
  </nav>
</template>

<style></style>
