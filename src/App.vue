<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SlotTest >
    <template #item="{ item , data }">
      <!-- <p>{{ body }}</p>
      <p>by {{ username }} | {{ likes }} likes</p> -->
      <p>{{data}}</p>
      <p>{{item.body}}</p>
    </template>
  </SlotTest>
  <router-view></router-view>
</template>

<script setup>
import SlotTest from "./components/SlotTest.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
