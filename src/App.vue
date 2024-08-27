<script setup>
import PasswordDisplay from "./components/PasswordDisplay.vue";
</script>

<template>
  <main>
    <h1>Password Generator</h1>
    <PasswordDisplay password="678asdf687a@/." />
  </main>
</template>

<style scope lang="scss">
@use "./assets/sass/variables" as *;

main {
  margin: auto 1rem;
}

h1 {
  @include font-heading-m();
  color: $color-grey;
  text-align: center;
}
</style>
