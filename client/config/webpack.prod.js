const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  plugins: [new UglifyjsWebpackPlugin()]
});
