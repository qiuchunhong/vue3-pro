<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="age" />
    <button @click="commit">提交</button>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "level3",
  setup(props, { attrs }) {
    const state = reactive({
      name: attrs.name,
      age: attrs.age,
    });
    const commit = () => {
      attrs.onEditInfo(state);
    };
    return {
      ...toRefs(state),
      commit,
    };
  },
});
</script>
<style scoped></style>
