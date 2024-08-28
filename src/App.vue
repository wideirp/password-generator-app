<script setup>
import PasswordDisplay from "./components/PasswordDisplay.vue";
import InteractiveSlider from "./components/InteractiveSlider.vue";
import OptionCheckbox from "./components/OptionCheckbox.vue";
</script>

<template>
  <main>
    <h1>Password Generator</h1>
    <PasswordDisplay password="678asdf687a@/." />
    <section>
      <InteractiveSlider />
      <OptionCheckbox />
    </section>
  </main>
</template>

<style scope lang="scss">
@use "./assets/sass/variables" as *;

main {
  margin: auto 1rem;
  color: $color-almost-white;
}

h1 {
  @include font-heading-m();
  color: $color-grey;
  text-align: center;
}

section {
  background: $color-dark-grey;
  margin-top: 1rem;
  padding: 1rem;
}
</style>
