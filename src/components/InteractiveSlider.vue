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
      v-model="store.characterLength"
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
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 2rem;
  }

  input[type="range"] {
    $thumb-height: 1.5rem;
    $track-height: 0.5rem;
    $track-color: rgba(0, 0, 0, 0.2);
    $brightness-hover: 180%;
    $brightness-down: 80%;
    $clip-edges: 0.125em;

    width: 100%;
    font-size: 1.5rem;
    background: transparent;
    overflow: hidden;
    margin-top: 0.75rem;

    &,
    &::-webkit-slider-runnable-track,
    &::-webkit-slider-thumb {
      appearance: none;
      height: $thumb-height;
      position: relative;
    }

    &::-webkit-slider-runnable-track {
      background: linear-gradient($color-very-dark-grey 0 0) scroll no-repeat
        center / 100% calc($track-height + 1px);
    }

    &::-webkit-slider-thumb {
      $clip-top: calc(($thumb-height - $track-height) * 0.5 - 0.5px);
      $clip-bottom: calc($thumb-height - $clip-top);
      $clip-further: calc(100% + 1px);

      width: $thumb-height;
      background-color: $color-almost-white;
      border: 1px solid $color-almost-white;
      border-radius: 50%;
      box-shadow: calc(-100vmax - $thumb-height) 0 0 100vmax $color-neon-green;
      clip-path: polygon(
        100% 1px,
        $clip-edges -1px,
        0 $clip-top,
        -100vmax $clip-top,
        -100vmax $clip-bottom,
        0 $clip-bottom,
        $clip-edges 100%,
        $clip-further $clip-further
      );

      @media (hover: hover) {
        &:hover {
          border-color: $color-neon-green;
          background-color: $color-very-dark-grey;
          cursor: grab;
        }
        &:active {
          cursor: grabbing;
        }
      }
    }

    &:active {
      cursor: grabbing;
    }
  }

  .count {
    position: absolute;
    top: 0;
    right: 0;
    color: $color-neon-green;
    @include font-heading-m();
    font-size: 1.5rem;
  }
}
</style>
