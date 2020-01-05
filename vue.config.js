const path = require('path');
module.exports = {
  publicPath: './', //基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // webpack配置
  // 链式操作
  chainWebpack: (config) => { },
  // 调整webPack配置
  configureWebpack: (config) => {
    // process.env.NODE_ENV === 'production'
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置
      config.mode = 'production'
    } else {
      // 为开发环境修改配置
      config.mode = 'development'
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {  // 别名配置
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@v': path.resolve(__dirname, './src/views')
        },
      }
    })
  },
  productionSourceMap: false,  // 生产环境是否生成 sourceMap 文件
  // // css相关配置
  // css: {
  //   extract: true, // 是否使用css分离插件 ExtractTextPlugin
  //   sourceMap: false, // 开启 CSS source maps?
  //   loaderOptions: {
  //     css: {}, // 这里的选项会传递给 css-loader
  //     postcss: {} // 这里的选项会传递给 postcss-loader
  //   }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
  //   modules: false // 启用 CSS modules for all css / pre-processor files.
  // },
  // parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  // pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // // webpack-dev-server 相关配置
  devServer: {
    //  自动打开浏览器
    open: true,
    // 设置为0.0.0.0则所有的地址均能访问
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: true, // 只有热更新不会刷新页面
    // 使用代理
    proxy: {
      '/api': {
        // 目标代理服务器地址
        target: 'https://www.easy-mock.com/mock/5e10a766ae7c2f324c274984/baseapi',
        // 允许跨域
        changeOrigin: true,
        ws: false, // 如果要代理 websockets，配置这个参数
        pathRewrite: {
          // '^/api':'/api' // -> target/api/login
          '^/api': '' // -> target/login
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {}
}