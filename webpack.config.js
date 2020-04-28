const HtmlWebPackPlugin = require("html-webpack-plugin");

// eslint-disable-next-line no-unused-vars
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: '"babel-loader',
        },
      },
    ],
  },
};
