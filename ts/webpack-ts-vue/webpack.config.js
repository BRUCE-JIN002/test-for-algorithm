const { Configuration } = require("webpack");
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
//通过link标签引入css文件， 而不是动态像style-loader一样标签插入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {Configuration}
 */
const config = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[chunkhash:16].js",
    clean: true
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        moment: {
          //拆出moment单独打包
          name: "moment",
          chunks: "all",
          test: /[\\/]node_modules[\\/]moment[\\/]/
        },
        //提取公共模块
        common: {
          name: "common",
          chunks: "all",
          minChunks: 2 //最少引用2次才分包
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[chunkhash:16].css"
    })
  ]
};

module.exports = config;
