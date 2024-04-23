export default {
    path: "paramTransfer",
    redirect: "paramTransfer/attr",
    meta: {
      title: "组件传参",
    },
    children: [
      {
        path: "attr",
        component: () =>
          import(/* webpackChunkName: "paramTransfer" */ "@/views/paramTransfer/attr/index.vue"),
        meta: {
          title: "attr祖孙传参-setup()",
        },
      },
      {
        path: "attr2",
        component: () =>
          import(/* webpackChunkName: "paramTransfer" */ "@/views/paramTransfer/attr2/index.vue"),
        meta: {
          title: "attr祖孙传参-setup",
        },
      },
    ],
  }