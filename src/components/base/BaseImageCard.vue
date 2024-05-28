<script setup></script>

<template>
  <v-card variant="tonal" class="mb-4" color="#6B4226">
    <v-row>
      <v-col cols="4">
        <v-container>
          <slot name="image" />
        </v-container>
      </v-col>
      <v-col>
        <v-card-item>
          <v-card-title>
            <slot name="title" />
          </v-card-title>

          <v-card-subtitle>
            <slot name="organizer" />
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <slot name="favorite" />
          </v-row>

          <div class="my-4 text-subtitle-1">
            <slot name="location" />
          </div>

          <slot name="shortDescription" />
          <div class="my-3 text-subtitle-1">
            <slot name="date" />
          </div>
          <slot name="participants" />
        </v-card-text>
        <v-card-actions>
          <slot name="actions" />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<style></style>
