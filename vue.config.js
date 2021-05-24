module.exports = {
  publicPath: './',
  indexPath: 'page1.html',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: false,
  productionSourceMap: false,
  parallel: undefined,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  },
  pages: {
    page1: {
      entry: 'src/pages/page1/main.js',
      template: 'public/index.html',
      filename: process.env.NODE_ENV == 'production' ? 'page1.html' : 'index.html'
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/index.html',
      filename: 'page2.html'
    },
    page3: {
      entry: 'src/pages/page3/main.js',
      template: 'public/index.html',
      filename: 'page3.html'
    },
    page4: {
      entry: 'src/pages/page4/main.js',
      template: 'public/index.html',
      filename: 'page4.html'
    },
    page5: {
      entry: 'src/pages/page5/main.js',
      template: 'public/index.html',
      filename: 'page5.html'
    },
    page6: {
      entry: 'src/pages/page6/main.js',
      template: 'public/index.html',
      filename: 'page6.html'
    },
    page7: {
      entry: 'src/pages/page7/main.js',
      template: 'public/index.html',
      filename: 'page7.html'
    },
    page8: {
      entry: 'src/pages/page8/main.js',
      template: 'public/index.html',
      filename: 'page8.html'
    }
  }
}