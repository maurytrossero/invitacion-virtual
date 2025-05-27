const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/', // Cambié './' a '/' para rutas absolutas, evita problemas con rutas relativas en SPA
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
    historyApiFallback: true, // Muy importante para que el servidor dev entienda rutas SPA
  },
})
