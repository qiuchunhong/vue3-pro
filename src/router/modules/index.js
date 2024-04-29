export default {
  path: "home",
  component: () =>
    import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
  meta: {
    title: "首页",
    leval: 1,
  },
};
