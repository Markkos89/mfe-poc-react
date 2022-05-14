const { merge } = require('webpack-merge')
const path = require('path')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')

const common = require('./webpack.common.js')
const federationConfig = require('./federation.config.json')
require('dotenv').config({ path: './.env' })

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  cache: false,
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8002,
    historyApiFallback: true,
  },
  plugins: [
    new MFLiveReloadPlugin({
      port: 8002,
      container: federationConfig.name,
      standalone: false,
    }),
  ],
})
