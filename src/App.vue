<script setup>
import PasswordDisplay from "./components/PasswordDisplay.vue";
import InteractiveSlider from "./components/InteractiveSlider.vue";
import OptionCheckbox from "./components/OptionCheckbox.vue";
import IconArrow from "./components/icons/IconArrow.vue";
</script>

<template>
  <main>
    <h1>Password Generator</h1>
    <PasswordDisplay password="678asdf687a@/." />
    <section>
      <InteractiveSlider />
      <OptionCheckbox id="uppercase" text="Include Uppercase Letters" />
      <OptionCheckbox id="lowercase" text="Include Lowercase Letters" />
      <OptionCheckbox id="numbers" text="Include Numbers" />
      <OptionCheckbox id="symbols" text="Include Symbols" />
      <button class="btn">Generate <IconArrow /></button>
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
