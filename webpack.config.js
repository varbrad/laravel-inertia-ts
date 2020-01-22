const path = require('path')

const DIST = path.resolve(__dirname, './public/dist')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: './resources/ts/app.tsx',
  },
  // devtool: isProd ? 'none' : 'eval-source-map',
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'chunks/[name].js?v=[chunkhash]',
    path: DIST,
    publicPath: '/dist/',
  },
  devServer: {
    writeToDisk: true,
  },
}
