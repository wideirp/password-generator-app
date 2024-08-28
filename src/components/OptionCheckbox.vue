<script setup>
defineProps({ id: String, text: String });
</script>

<template>
  <div>
    <label for="">{{ text }}</label>
    <input type="checkbox" name="id" :id />
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
