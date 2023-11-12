const path = require('path');

const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/main.tsx', // Entry point is now a TypeScript file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Add any other loaders such as style-loader or css-loader if needed
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new Dotenv({
        path: './.env.local', // Path to .env.local file
      }),
],
};
