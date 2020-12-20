module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/fennngxiao.github.io/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/index.scss";`,
      },
    },
  },
};
