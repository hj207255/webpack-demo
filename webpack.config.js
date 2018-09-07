const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry:  './app/index.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js" // 打包后输出文件的文件名
    },
    module: {
        rules: [
            {
            // js 文件才使用 babel
                test: /\.js$/,
             // 使用哪个 loader
                use: 'babel-loader',
            // 不包括路径
                exclude: /node_modules/
            },
            {
              test: /\.scss$/,
              use: [{
                loader: "style-loader" // creates style nodes from JS strings
              }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: { importLoaders: 1 }
              }, {
                 loader: 'postcss-loader'
              },{
                loader: "sass-loader" // compiles Sass to CSS
              }]
             }
        ]
    }
  }
