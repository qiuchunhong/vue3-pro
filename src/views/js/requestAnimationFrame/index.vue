<template>
  <button @click="goFn">go</button>
  <div class="box">
    <div class="box1">setTimeout</div>
    <div class="box2">requestAnimationFrame</div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({});

// let box1 = document.getElementsByClassName('box1')

// setInterval定时器方式
const setIntervalFn = () => {
  let box1 = document.querySelector(".box1");
  box1.style.left = "0px";
  let timer = null;
  timer = setInterval(function () {
    let letVal = parseInt(box1.style.left);
    if (letVal < 700) {
      box1.style.left = letVal + 1 + "px";
    } else {
      clearInterval(timer);
    }
  }, 17);
};

// requestAnimationFrame请求动画帧方式
const requestAnimationFrameFn = () => {
  const box2 = document.querySelector(".box2");
  box2.style.left = "0px";
  const fn = ()=> {
    let letVal = parseInt(box2.style.left);
    if (letVal < 700) {
      box2.style.left = letVal + 1 + "px";
      window.requestAnimationFrame(fn);
    }
  }
  window.requestAnimationFrame(fn);
};
const goFn = () => {
  setIntervalFn();
  requestAnimationFrameFn();
};
</script>
<style scoped lang="less">
.box {
  width: 100%;
  position: relative;
}
.box1,
.box2 {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 0;
}
.box1 {
  background: red;
  top: 0;
}
.box2 {
  background: green;
  top: 210px;
}
</style>
