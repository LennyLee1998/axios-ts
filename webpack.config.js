// node环境用require
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  // 运行模式
  mode: "development",
  // 入口
  entry: "./src/index.ts",
  output: {
    // Vue输出到./dist文件夹, React输出到build文件夹
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  resolve: {
    // 后缀名, 依赖的有些包的后缀名是.cjs
    extensions: [".ts", ".js", "cjs", ".json"]
  },
  devServer: {},
  module: {
    rules: [
      {
        // 主要加载ts文件
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}