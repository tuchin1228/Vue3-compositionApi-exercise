<template>
  <div class="hello">
    <h3>{{ name }}</h3>
  </div>
  <div>test</div>
  <input type="text" v-model="year" />
  <router-link to="/">Home</router-link>
  <router-link to="/product">Product</router-link>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
const name = ref('winnie');
const year = ref('year');
console.log('created');
onMounted(() => {
  console.log('[onMounted]');
  console.log('-------------');
});
watch(year, (newValue, oldValue) => {
  console.log('watch year', newValue, oldValue);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  h3 {
    color: red;
  }
}
</style>
