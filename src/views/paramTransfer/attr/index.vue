<template>
  index-name:{{ name }} index-age:{{ age }}
  <level2 :name="name" :age="age" @editInfo="editInfo" />
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
import level2 from "./components/level2.vue";
export default defineComponent({
  name: "attr",
  components: { level2 },
  setup() {
    const state = reactive({
      name: "zhang",
      age: 23,
    });
    const editInfo = (params) => {
      state.name = params.name;
      state.age = params.age;
    };
    return {
      ...toRefs(state),
      editInfo,
    };
  },
});
</script>
<style scoped lang="less">
</style>
