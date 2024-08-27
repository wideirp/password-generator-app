<script setup>
import TextField from "./components/TextField.vue";
</script>

<template>
  <h1>Password Generator</h1>
  <TextField />
</template>

<style scope lang="scss">
@use "./assets/sass/variables" as *;

h1 {
  @include font-heading-m($color-grey);
  text-align: center;
}
</style>
