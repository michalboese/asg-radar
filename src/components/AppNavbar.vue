<script setup>
import NavItems from './NavItems.vue'
import BaseButton from './base/BaseButton.vue'
</script>

<template>
  <v-app-bar color="#3D4731" elevation="6">
    <BaseButton
      style="margin-left: 30px"
      size="large"
      prepend-icon="mdi-radar"
      color="#EAE6D6"
      variant="outlined"
      to="/"
      >ASG Radar</BaseButton
    >
    <v-app-bar-title></v-app-bar-title>
    <v-spacer></v-spacer>
    <NavItems />
  </v-app-bar>
</template>

<style></style>
