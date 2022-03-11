const { defineConfig } = require('@vue/cli-service')
// const { resolve } = require("@babel/core/lib/vendor/import-meta-resolve");
module.exports = defineConfig({
    pages: {
        index: {
            entry: 'examples/main.js'
        }
    },
    // chainWebpack: config => {
    //     config.module
    //         .rule('js')
    //         .include.add(resolve(__dirname, 'packages'))
    //         .end()
    //         .use('babel')
    //         .loader('babel-loader')
    //         .tap(options => {
    //             return options
    //         })
    // },
    transpileDependencies: true
})
