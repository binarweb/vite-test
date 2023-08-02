const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
}
