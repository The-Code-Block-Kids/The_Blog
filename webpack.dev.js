'use strict';

const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const MiniCSSPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common');

const webpackDevConfig = {};

webpackDevConfig.mode = 'development';
webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: './build',
  open: true,
  hot: true,
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
  new MiniCSSPlugin({
    filename: '[name].[hash].css',
  }),
];

webpackDevConfig.module = {};

webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [
      MiniCSSPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
];

module.exports = merge(commonConfig, webpackDevConfig);
