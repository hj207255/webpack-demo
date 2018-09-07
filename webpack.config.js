const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry:  './app/index.js', // ����ļ�
    output: {
      path: path.resolve(__dirname, 'build'), // ����ʹ�þ��Ե�ַ������ļ���
      filename: "bundle.js" // ���������ļ����ļ���
    },
    module: {
        rules: [
            {
            // js �ļ���ʹ�� babel
                test: /\.js$/,
             // ʹ���ĸ� loader
                use: 'babel-loader',
            // ������·��
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
