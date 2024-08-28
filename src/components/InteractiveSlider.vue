<script setup>
import { ref } from "vue";

const characterLength = ref("10");
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
      v-model="characterLength"
    />
    <span class="count">{{ characterLength }}</span>
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
