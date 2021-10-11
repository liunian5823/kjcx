// require("babel-polyfill")
module.exports = {
  transpileDependencies: ["@arcgis"],

  //这里禁止使用eslint-loader
  lintOnSave: false,

  //静态资源目录（js,css,image）
  assetsDir: "assets",

  //生成环境下面开启sourceMap支持断点调试
  productionSourceMap: false,

  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 生产环境不输出日志
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  },

  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    open: true,
    host: "0.0.0.0",
    port: 8081,
    https: false,
    proxy: {
      "/api": {
        target: "http://192.168.1.152:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  pluginOptions: {
    "process.env": {
      NODE_ENV: '"development"'
    }
  }
};
