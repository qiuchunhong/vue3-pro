<template>
  <div class="layout">
    <leftMenu />
    <div class="l-right">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import leftMenu from "./components/leftMenu";
</script>
<style scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100vh;
}
.l-right {
  padding-left: 16px;
  flex: 1;
}
</style>
