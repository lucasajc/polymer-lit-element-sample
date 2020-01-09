const { resolve } = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ],
  },
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};
