module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-unused-vars": [0, { vars: "all", args: "after-used" }], //不能有声明后未被使用的变量或参数
  },
};
