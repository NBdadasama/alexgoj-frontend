const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.plugin("monaco").use(new MonacoWebpackPlugin());
  },
  devServer: {
    historyApiFallback: true, // 表示当找不到对应路由的页面时，会返回index.html页面，用于支持单页应用的前端路由
    allowedHosts: "all", // 表示允许所有的主机访问开发服务器（解决Invalid Host header问题）
    host: "0.0.0.0", // 表示开发服务器监听所有可用的网络接口，以便可以通过任何可用的IP地址进行访问
    port: 8080,
    client: {
      webSocketURL: "ws://0.0.0.0:8080/ws",
    }, // 这个配置项用于配置开发服务器的客户端相关的设置。在这里，设置了webSocketURL为'ws://0.0.0.0:8080/ws'，用于指定与开发服务器建立WebSocket连接的URL（解决https域名导致 ws报错问题）
    headers: {
      "Access-Control-Allow-Origin": "*",
    }, // 这个配置项用于设置开发服务器的响应头。在这里，设置了'Access-Control-Allow-Origin'为'*'，表示允许所有来源的请求跨域访问开发服务器
  },
});
