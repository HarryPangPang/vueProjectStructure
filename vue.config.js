// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const PATH = process.env.VUE_APP_PUBLISH_PATH
module.exports = {
  // publicPath
  publicPath:PATH,
  // 服务代理
  devServer: {
    proxy: {
      '/proxyApi': {
        target: 'http://dev.xxx.com',
        changeOrigin: true,
        pathRewrite: {
          '/proxyApi': ''
        }
      }
    }
  },
  // 打包去除注释内容等
  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = [];
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
              // pure_funcs: ['console.log']//移除console
            },
            output: {
              // 去掉注释内容
              comments: false,
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
      config.plugins = [
        ...config.plugins,
        ...plugins
      ];
    }
  },
  // 
}