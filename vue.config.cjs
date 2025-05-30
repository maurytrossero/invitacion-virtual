const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  lintOnSave: false,     // ← DESACTIVA ESLint en serve/build
  transpileDependencies: true,
  publicPath: '/',
  css: {
    extract: true,
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
  },
});
