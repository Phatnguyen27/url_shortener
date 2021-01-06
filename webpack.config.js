/* eslint-disable no-undef */
const HTMLWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    module:{
      rules:[
       {
          test:/\.(js|jsx)$/,
          exclude:/node_modules/,
          use: {
            loader:'babel-loader',
          },
       },
       {
          test: /\.svg$/,
          exclude:/node_modules/,
          use: {
            loader: 'svg-url-loader'
          }
       }
     ]
  },
  plugins: [
    new HTMLWebPackPlugin({
        template:"./src/index.html",
        filename:"./index.html"
       })
   ],
   devServer:{
    port:5200
 }
 };