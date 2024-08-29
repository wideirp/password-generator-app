<script setup>
import PasswordDisplay from "./components/PasswordDisplay.vue";
import InteractiveSlider from "./components/InteractiveSlider.vue";
import OptionCheckbox from "./components/OptionCheckbox.vue";
import IconArrow from "./components/icons/IconArrow.vue";
import PasswordGenerator from "./PasswordGenerator";
import { store } from "./store";

const passGen = new PasswordGenerator();

function onClick() {
  const newPass = passGen.generatePassword(
    store.characterLength,
    store.includeLower,
    store.includeUpper,
    store.includeNumbers,
    store.includeSymbols
  );
  store.password = newPass;
}
</script>

<template>
  <main>
    <h1>Password Generator</h1>
    <PasswordDisplay :password="store.password" />
    <section>
      <InteractiveSlider />
      <OptionCheckbox
        id="uppercase"
        text="Include Uppercase Letters"
        v-model="store.includeUpper"
      />
      <OptionCheckbox
        id="lowercase"
        text="Include Lowercase Letters"
        v-model="store.includeLower"
      />
      <OptionCheckbox
        id="numbers"
        text="Include Numbers"
        v-model="store.includeNumbers"
      />
      <OptionCheckbox
        id="symbols"
        text="Include Symbols"
        v-model="store.includeSymbols"
      />
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
