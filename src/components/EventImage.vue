<script setup>
import { computed } from 'vue'
import BaseImage from '@/components/base/BaseImage.vue'

const eventImage = computed(() => {
  const images = ['asg1', 'asg2', 'asg3', 'asg4']
  const randomIndex = Math.floor(Math.random() * images.length)

  return `/images/${images[randomIndex]}.jpg`
})
</script>

<template>
  <BaseImage :src="eventImage" cover height="auto" />
</template>

<style></style>
