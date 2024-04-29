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
  background: #f2f2f2;
}
.l-right {
  margin: 10px;
  padding: 10px;
  flex: 1;
  overflow: auto;
  background: #fff;
  border-radius: 8px;
}
</style>
