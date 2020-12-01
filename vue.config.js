
module.exports = {
    devServer: {
      proxy: {
        '^/': {
          target: 'http://localhost:4433',
          changeOrigin: true
        },
      }
    }
  }