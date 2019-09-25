// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const PATH = process.env.VUE_APP_PUBLISH_PATH
module.exports = {
  // publicPath
  publicPath:PATH,
  // 服务代理
  devServer: {
    devServer: {
      disableHostCheck: true,
      proxy: {
        '/': {
          target: 'http://xxxx',
          changeOrigin: true,
          pathRewrite: {'^/':''},
          onProxyReq (proxyReq, req, res) {
            originHost = req.headers['x-forwarded-for']
            const cookie = req.headers['cookie']
            if (cookie) {
              proxyReq.setHeader('cookie', cookie)
            }
          },
          onProxyRes(proxyRes, req, res) {
            var cookies = proxyRes.headers['set-cookie'];
            var cookieRegex = /Domain=\.?xxx.com/i;
            if (cookies) {
              console.log(proxyRes.headers['set-cookie'])
              // 将Domian=.xx.xx.com改为本地即可将cookie种在本地
             let newCookie = cookies.map(v => {
                return v.replace('Domain=.xxxx', 'Domain=localhost')
                // return v.replace(cookieRegex, 'Domain=localhost')
              })
              delete proxyRes.headers['set-cookie'];
              proxyRes.headers['set-cookie'] = newCookie; 
            }
        }
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