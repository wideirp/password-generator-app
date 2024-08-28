<script setup>
import IconCopy from "./icons/IconCopy.vue";
import { store } from "@/store";

const onClick = (event) => {
  const copiedEl = event.currentTarget.nextSibling;
  copiedEl.classList.add("visible");
  setTimeout(() => {
    copiedEl.classList.remove("visible");
  }, 2000);
  navigator.clipboard.writeText(store.password);
};
</script>

<template>
  <div>
    <input
      type="text"
      disabled
      placeholder="P4$5W0rD!"
      id="passwordDisplay"
      :value="store.password"
    />
    <a @click.prevent="onClick"><IconCopy /></a>
    <span class="copied">COPIED</span>
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

  .copied {
    display: none;
    position: absolute;
    color: $color-neon-green;
    right: 3rem;
    bottom: calc(50% - 0.75rem);
  }

  .visible {
    display: inline-block;
  }
}
</style>
