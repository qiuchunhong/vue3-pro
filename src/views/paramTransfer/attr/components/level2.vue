<template>
  <level3 v-bind="$attrs" />
</template>
<script>
import { defineComponent } from "vue";
import level3 from "./level3.vue";
export default defineComponent({
  name: "level2",
  components: { level3 },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
