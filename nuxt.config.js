const axios = require('axios')
const CompressionPlugin = require('compression-webpack-plugin');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blockcc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    // color: '#f00',
    // height: '1px'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'view-design/dist/styles/iview.css'
  ],
  router:{
    middleware: ['i18n','setcookie']

  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/i18n', ssr: true},
    {src: '@/plugins/axios', ssr: true},
    {src: '@/plugins/view-ui', ssr: true},
    {src: '@/plugins/filter', ssr: true},
    {src: '@/plugins/api', ssr: true},
  ],
  // mode: 'universal',
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  generate: {
    subFolders:false,
    crawler:true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  axios: {
    // baseURL: 'https://api.bixiaobao.com/',
    prefix: '/api',
    // credentials: true,
    proxy: true
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  proxy: {
		'/api': {
			target: 'http://96.9.211.136:8200/api/', // 接口服务器地址
      changeOrigin: true,
			pathRewrite: {
				'^/api' : '/',
			}
		}
	},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^iview/],
    vendor: ['axios','iview'],
    extractCSS: { allChunks: true },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false // 是否删除原文件
      })
 
    ],
    analyze:true, // 检测js包大小
    assetFilter: function(assetFilename) {	    		
      return assetFilename.endsWith('.js');	    	
    }
  }
}
