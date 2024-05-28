<script setup></script>

<template>
  <v-row>
    <v-col cols="2">
      <slot name="leftbar" />
    </v-col>
    <v-col>
      <slot name="main" />
    </v-col>
    <v-col cols="2">
      <slot name="rightbar" />
    </v-col>
  </v-row>
</template>

<style></style>
