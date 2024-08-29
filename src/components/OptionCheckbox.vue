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
  color: $color-almost-white;
  input {
    border: none;
    outline: none;
  }
}
</style>
