const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'developpement',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
})