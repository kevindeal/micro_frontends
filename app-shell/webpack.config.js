const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000, // Adjust this based on your project
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // This rule is for processing CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'appShell',
      remotes: {
        appHeader: 'appHeader@http://localhost:3001/remoteEntry.js',
        appBody: 'appBody@http://localhost:3002/remoteEntry.js',
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
