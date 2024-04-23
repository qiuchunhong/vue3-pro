<template>
  <div>
    <input type="text" v-model="state.name" />
    <input type="text" v-model="state.age" />
    <button @click="commit">提交</button>
  </div>
</template>
<script setup>
import { reactive, useAttrs } from "vue";
const attrs = useAttrs()
const state = reactive({
  name: attrs.name,
  age: attrs.age,
});
const commit = () => {
  attrs.onEditInfo(state);
};
</script>
<style scoped></style>
