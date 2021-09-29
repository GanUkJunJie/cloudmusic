module.exports = {
    lintOnSave: false, //关闭语法检查
    configureWebpack: {
        resolve: {
            extensions: ['.vue'],
            alias: {
                'api': '@/api',
                'network':'@/network',
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'mixin': '@/mixin',
                'utils': '@/utils',
                'views': '@/views'

            }
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://autumnfish.cn/',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true,
                ws: true,
            },
            '/back': {
                target: 'http://localhost:8081/',
                pathRewrite: {
                    '^/back': ''
                },
                changeOrigin: true,
                ws: true,
            },
        }
    }
}