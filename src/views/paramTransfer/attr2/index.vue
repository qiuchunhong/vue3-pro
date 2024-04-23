<template>
  index-name:{{ state.name }} index-age:{{ state.age }}
  <level2 :name="state.name" :age="state.age" @editInfo="editInfo" />
</template>
<script setup>
import { reactive } from "vue";
import level2 from "./components/level2.vue";

const state = reactive({
  name: "zhang", 
  age: 23,
});
const editInfo = (params) => {
  state.name = params.name;
  state.age = params.age;
};
</script>
<style scoped></style>
