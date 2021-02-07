const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ["babel-loader", "ts-loader"]
      },
    ],
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [new GasPlugin()],
};
