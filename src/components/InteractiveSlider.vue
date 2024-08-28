<script setup>
import { store } from "@/store";
</script>

<template>
  <fieldset>
    <label for="slider">Character Length</label>
    <input
      type="range"
      name="slider"
      id="slider"
      min="6"
      max="16"
      step="1"
      :value="store.characterLength"
    />
    <span class="count">{{ store.characterLength }}</span>
  </fieldset>
</template>

<style scoped lang="scss">
@use "../assets/sass/variables" as *;

fieldset {
  border: none;
  margin: 0;
  padding: 0;
  position: relative;

  label {
    display: block;
    @include font-body();
  }

  input[type="range"] {
    width: 100%;
    margin-top: 1rem;
  }

  span.count {
    position: absolute;
    top: 0;
    right: 0;
    color: $color-neon-green;
    @include font-heading-m();
  }
}
</style>
