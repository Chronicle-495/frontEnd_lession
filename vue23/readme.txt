npm init -y 直接创建
yarn add webpack webpack-cli webpack-dev-server
(node.js中安装了yarn, 没开的用corepack enable开一下), @版本号选填
修改一下package.json, "test"删掉, 加上"dev": "webpack-dev-server"
引入
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
安装vue-loader(vue3配套的是vue-loader@next), vue/compiler-sfc(引入vue.global.js, 这个就不需要再引了, 追加: 不不不, 还是要引@vue/compiler-sfc), html-webpack-plugin
yarn add bulabula...就行了

写配置文件, 名字是webpack.config.js, 注意VueLoaderPlugin是vue-loader/dist/plugin.js的default, 和plugins应该跟module同级
const { resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    externals: {
        'vue': 'Vue'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public/index.html')
        })
    ]
}