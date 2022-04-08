<template>
  <div>
    <h1>SlotTest</h1>
  </div>
  <ul>
    <li v-for="item in items" :key="item.body">
      <slot name="item" :item="item" :data="123345" />
    </li>
  </ul>
</template>

<script setup>
import { ref, reactive } from "vue";
const items = reactive([
  { body: "Scoped Slots Guide", username: "Evan You", likes: 20 },
  { body: "Vue Tutorial", username: "Natalia Tepluhina", likes: 10 },
]);
</script>

<style>
</style>