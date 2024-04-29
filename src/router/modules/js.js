export default {
  path: "js",
  redirect: "js/requestAnimationFrame",
  meta: {
    title: "js相关",
    leval: 3,
  },
  children: [
    {
      path: "requestAnimationFrame",
      component: () =>
        import(
          /* webpackChunkName: "js" */ "@/views/js/requestAnimationFrame/index.vue"
        ),
      meta: {
        title: "请求动画帧",
      },
    },
  ],
};
