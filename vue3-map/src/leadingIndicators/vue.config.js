// 生产环境标记
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
// 配置引用cdn的js、css地址
const cdn = {
    css: ['https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.10/theme-chalk/index.css'],
    js: [
        'https://lib.baomitu.com/vue/2.7.7/vue.js',
        'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.10/index.js',
        'https://fastly.jsdelivr.net/npm/echarts@5.4.0/dist/echarts.min.js',
        'https://cdn.bootcdn.net/ajax/libs/xlsx/0.18.5/xlsx.core.min.js',
    ],
}

const externals = {
    // CDN 的 Element 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
    // 属性名称 vue, 表示遇到 import xxx from 'vue' 这类引入 'vue'的，不去 node_modules 中找，而是去找全局变量 Vue（其他的为VueRouter、Vuex、axios、ELEMENT、echarts，注意全局变量是一个确定的值，不能修改为其他值，修改为其他大小写或者其他值会报错，若有异议可留言）
    vue: 'Vue',
    // 属性名称 element-ui, 表示遇到 import xxx from 'element-ui' 这类引入 'element-ui'的，
    // 不去 node_modules 中找，而是去找 全局变量 ELEMENT
    'element-ui': 'ELEMENT',
    echarts: 'echarts',
    'xlsx': 'XLSX',
}

// 写法1: 在configureWebpack配置externals
module.exports = {
    productionSourceMap: !IS_PRODUCTION, // 生产环境的 source map
    // configureWebpack 值为对象，会通过 webpack-merge 合并到最终的配置
    // 配置打包时使用CDN节点（加入externals外部扩展）， 忽略打包的第三方库
    // 左面放package.json中的扩展的名称,右面放项目依赖的名称(项目初始化要用的名称)
    configureWebpack: {
        externals,
    },
    chainWebpack(config) {
      if (IS_PRODUCTION) {
          config.plugin('html').tap((args) => {
              args[0].cdn = cdn
              return args
          })
          //视为一个外部库，而不将它打包进来
          config.externals(externals)
      }
    },
}