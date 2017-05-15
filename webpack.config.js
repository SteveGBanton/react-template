var webpack = require("webpack");
var folder = __dirname;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: folder + "/dist/assets",
    filename: "bundle.js",
    publicPath: "/assets"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["env", "stage-0", "react"]
        }
      },
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
    ]
  }
}
