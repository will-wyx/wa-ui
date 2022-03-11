const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  transpileDependencies: true
})
