const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './app/index.ts',
  devtool: 'source-map',
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
    extensions: [ '.tsx', '.ts', '.js', '.json' ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  optimization: {
    minimize: false
  },
  // externals: [nodeExternals()],
}