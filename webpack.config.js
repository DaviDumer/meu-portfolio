const path = require('path');
const port = 3001;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    // allowedHosts: 'all',

    // this achieves the same effect as the first example
    // with the bonus of not having to update your config
    // if new subdomains need to access the dev server
    allowedHosts: ['.host.com', 'host2.com'],
    compress: true,
    port: 3001,
  },
};
