<script setup>
import { store } from "@/store";
</script>

<template>
  <section class="comp">
    <span>Strength</span>
    <div class="indicator">
      <h4 class="strength-text">{{ store.strength }}</h4>
      <div class="boxes">
        <div
          class="box"
          :class="{
            red: store.strength === 'too weak!',
            orange: store.strength === 'weak',
            yellow: store.strength === 'medium',
            green: store.strength === 'strong',
          }"
        ></div>
        <div
          class="box"
          :class="{
            orange: store.strength === 'weak',
            yellow: store.strength === 'medium',
            green: store.strength === 'strong',
          }"
        ></div>
        <div
          class="box"
          :class="{
            yellow: store.strength === 'medium',
            green: store.strength === 'strong',
          }"
        ></div>
        <div
          class="box"
          :class="{
            green: store.strength === 'strong',
          }"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

.comp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $color-very-dark-grey;

  span {
    @include font-body();
    color: $color-grey;
  }

  .indicator {
    display: flex;
    gap: 1rem;
    .strength-text {
      @include font-heading-m();
      color: $color-almost-white;
      text-transform: uppercase;
      margin: 0;
    }

    .boxes {
      display: flex;
      gap: 0.5rem;
      .box {
        width: 0.6rem;
        height: 100%;
        min-height: 2rem;
        border: 1px solid $color-almost-white;
      }
      .green {
        background: $color-neon-green;
        border-color: $color-neon-green;
      }
      .yellow {
        background: $color-yellow;
        border-color: $color-yellow;
      }
      .orange {
        background: $color-orange;
        border-color: $color-orange;
      }
      .red {
        background: $color-red;
        border-color: $color-red;
      }
    }
  }
}
</style>
