<template lang="">
  <div>Product2Component</div>
  <ul>
    <li v-for="item in state.names" :key="item.title">{{ item.title }}</li>
  </ul>
  <ul>
    <li v-for="item in result" :key="item.title">{{ item.title }}</li>
  </ul>
</template>
<script setup>
import { reactive, computed } from 'vue';
const state = reactive({
  names: [
    { title: 'Vue', value: 'Vue' },
    { title: 'React', value: 'React' },
    { title: 'Angular', value: 'Angular' },
    { title: 'Laravel', value: 'Laravel' },
    { title: 'CakePHP', value: 'CakePHP' },
    { title: 'Django', value: 'Django' },
  ],
  types: [
    { title: 'Frontend', value: 'Frontend' },
    { title: 'Backend', value: 'Backend' },
  ],
});
const result = computed(() => {
  return state.names.filter((item) => item.title == 'Vue');
});
</script>
<style lang=""></style>
