<script setup>
import IconCopy from "./icons/IconCopy.vue";

import { defineProps } from "vue";

defineProps({ password: { type: String, required: true } });
</script>

<template>
  <div>
    <input
      type="text"
      disabled
      placeholder="P4$5W0rD!"
      id="passwordDisplay"
      :value="password"
    />
    <a href=""><IconCopy /></a>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/sass/variables" as *;

div {
  position: relative;

  input {
    width: 100%;
    @include font-heading-m();
    color: $color-almost-white;
    background: $color-dark-grey;
    outline: none;
    border: none;
    padding: 1rem;
    box-sizing: border-box;
    @media screen and (min-width: 30rem) {
      @include font-heading-l();
    }
  }

  a {
    position: absolute;
    right: 1rem;
    bottom: calc(50% - 1rem);
  }
}
</style>
