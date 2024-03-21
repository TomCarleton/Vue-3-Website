<script setup lang="ts">
  import LanguageCard from './LanguageCard.vue';
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          One of three columns
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <language-card />
  <language-card />
  <language-card />
  <language-card />
  <language-card />
</template>
