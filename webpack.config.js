const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
      './src/app.js',
      './src/styles.css'
    ],
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, './assets/scripts'),
      publicPath: '/'      
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "script-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        }
      ]
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
      ]
  };