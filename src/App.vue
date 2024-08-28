<script setup>
import { ref } from "vue";
import PasswordDisplay from "./components/PasswordDisplay.vue";
import InteractiveSlider from "./components/InteractiveSlider.vue";
import OptionCheckbox from "./components/OptionCheckbox.vue";
import IconArrow from "./components/icons/IconArrow.vue";
import PasswordGenerator from "./PasswordGenerator";

const passGen = new PasswordGenerator();
const pass = ref("");

function onClick() {
  const newPass = passGen.generatePassword(8, true, true, true, true);
  pass.value = newPass;
}
</script>

<template>
  <main>
    <h1>Password Generator</h1>
    <PasswordDisplay :password="pass" />
    <section>
      <InteractiveSlider />
      <OptionCheckbox id="uppercase" text="Include Uppercase Letters" />
      <OptionCheckbox id="lowercase" text="Include Lowercase Letters" />
      <OptionCheckbox id="numbers" text="Include Numbers" />
      <OptionCheckbox id="symbols" text="Include Symbols" />
      <button class="btn" @click.prevent="onClick">
        Generate <IconArrow />
      </button>
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
