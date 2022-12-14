const path = require("path");
const { merge } = require("webpack-merge");
const prod = require("./webpack.prod.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EN = require("./src/locales/en.json");

module.exports = merge(prod, {
  output: {
    path: path.resolve(__dirname, "dist/EN"),
  },

  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      title: EN.head.title,
      lang: "en",
    }),
  ],
});
