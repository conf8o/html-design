module.exports = {
  entry: "/main/src/jsx/index.jsx",
  output: {
    path: __dirname + "/main/",
    filename: "index.js",
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
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
