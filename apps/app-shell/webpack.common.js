const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin')

const deps = require('./package.json').dependencies

module.exports = {
  entry: {
    app: 'src/index.ts',
  },
  plugins: [
    new RetryChunkLoadPlugin({
      retryDelay: 3000,
      maxRetries: 5,
    }),
    new ModuleFederationPlugin({
      name: 'app-shell',
      remotes: {
        users: process.env.REACT_APP_MFE_USERS_URL || 'users@http://localhost:8001/remoteEntry.js',
        posts: process.env.REACT_APP_MFE_POSTS_URL || 'posts@http://localhost:8002/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
        '@chakra-ui/react': {
          singleton: true,
          eager: true,
          requiredVersion: deps['@chakra-ui/react'],
        },
        'framer-motion': {
          singleton: true,
          eager: true,
          requiredVersion: deps['framer-motion'],
        },
        '@emotion/react': {
          singleton: true,
          eager: true,
          requiredVersion: deps['@emotion/react'],
        },
        '@emotion/styled': {
          singleton: true,
          eager: true,
          requiredVersion: deps['@emotion/styled'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\/bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                },
              ],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}
