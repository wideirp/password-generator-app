<script setup>
import PasswordDisplay from "./components/PasswordDisplay.vue";
import InteractiveSlider from "./components/InteractiveSlider.vue";
import OptionCheckbox from "./components/OptionCheckbox.vue";
import PasswordStrength from "./components/PasswordStrength.vue";
import IconArrow from "./components/icons/IconArrow.vue";
import PasswordGenerator from "./PasswordGenerator";
import { store } from "./store";

const passGen = new PasswordGenerator();

function onClick() {
  const [newPass, strength] = passGen.generatePassword(
    store.characterLength,
    store.includeLower,
    store.includeUpper,
    store.includeNumbers,
    store.includeSymbols
  );
  store.password = newPass;
  store.strength = strength;
}
</script>

<template>
  <main>
    <h1>Password Generator</h1>
    <PasswordDisplay />
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
      <PasswordStrength />
      <button class="btn" @click.prevent="onClick">
        Generate <IconArrow />
      </button>
    </section>
  </main>
</template>

<style scope lang="scss">
@use "./assets/sass/variables" as *;

main {
  color: $color-almost-white;
  @media screen and (min-width: 22rem) {
    margin: 0 1rem;
  }
  @media screen and (min-width: 36rem) {
    max-width: 540px;
    margin: 0 auto;
  }
}

h1 {
  @include font-heading-m();
  color: $color-grey;
  text-align: center;
  width: 100%;
}

section {
  background: $color-dark-grey;
  margin-top: 1rem;
  padding: 1rem;

  button {
    margin-top: 0.75rem;
  }
}
</style>
