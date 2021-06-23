const outputPath = __dirname + "/main/";

module.exports = {
  entry: "/main/src/index.js",
  output: {
    path: outputPath,
    filename: "index.js",
  },
  devServer: {
    contentBase: outputPath,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          "sass-loader"
        ]
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
