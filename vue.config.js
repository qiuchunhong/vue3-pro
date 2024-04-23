module.exports = {
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      });
      return definitions;
    });
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#165DFF",
            "link-color": "#165DFF",
            "border-radius-base": "2px",
            "primary-hover-color": "#4080FF",
            "primary-active-color": "#0E42D2",
            "primary-disable-color": "#BEDAFF",
            "primary-background-color": "#E8F3FF",
            "text-title-color": "#1D2129",
            "text-color": "#4E5969",
            "text-light-color": "#86909C",
            "text-shallow-color": "#C9CDD4",
            "error-color": "#F53F3F",
            "error-hover-color": "#F76560",
            "error-active-color": "#CB2634",
            "error-disable-color": "#FBACA3",
            "error-background-color": "#FFECE8",
            "success-color": "#00C853",
            "success-hover-color": "#23C343",
            "success-active-color": "#009A29",
            "success-disable-color": "#7BE188",
            "success-background-color": "#E6FFEC",
            "warning-color": "#FF7D00",
            "warning-hover-color": "#FF9A2E",
            "warning-active-color": "#D25F00",
            "warning-disable-color": "#FFCF8B",
            "warning-background-color": "#FFF7E8",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
