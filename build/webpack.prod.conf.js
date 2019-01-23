"use strict";
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const PACKAGE = require("../package.json");
const buildVersion = PACKAGE.version;

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    "aeris-datepicker": "./src/lib/modules/aeris-datepicker/index.js",
    "aeris-language": "./src/lib/modules/aeris-language/index.js",
    "aeris-notification": "./src/lib/modules/aeris-notification/index.js",
    "aeris-orcid": "./src/lib/modules/aeris-orcid/index.js",
    "aeris-theme": "./src/lib/modules/aeris-theme/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/",
    filename: "[name]" + "_" + buildVersion + ".js"
  },
  devtool: "#source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin(["dist/*.*"], {
      root: path.resolve(__dirname, "../")
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
});

module.exports = webpackConfig;
