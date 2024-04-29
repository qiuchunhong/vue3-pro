export default {
  path: "css",
  redirect: "css/record",
  meta: {
    title: "css相关",
    leval: 2,
  },
  children: [
    {
      path: "record",
      component: () =>
        import(/* webpackChunkName: "js" */ "@/views/css/record/index.vue"),
      meta: {
        title: "css细节记录",
      },
    },
  ],
};
