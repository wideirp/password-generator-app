<script setup>
import { store } from "@/store";

const checkedModel = defineModel({ type: Boolean });

function update(e) {
  e.preventDefault();
  checkedModel.value = e.target.checked;
  console.log(store);
}
defineProps({ id: String, text: String });
</script>

<template>
  <div>
    <label for="">{{ text }}</label>
    <input
      type="checkbox"
      name="id"
      :id
      @change="update"
      :checked="checkedModel"
    />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/sass/variables" as *;
div {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 0;

  input[type="checkbox"] {
    appearance: none;
    outline: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid $color-almost-white;
    background-color: $color-dark-grey;

    &:checked {
      border-color: $color-neon-green;
      background-color: $color-neon-green;
      background-image: url("/icon-check.svg");
      background-size: cover;
    }

    &:hover {
      @media (hover: hover) {
        transform: scale(1.05);
        &:not(:checked) {
          border-color: $color-neon-green;
        }
      }
    }
  }
}
</style>
