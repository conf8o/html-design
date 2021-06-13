module.exports = {
  entry: "/section_node_jsx/section_node.jsx",
  output: {
    path: __dirname + "/section_node_jsx/",
    filename: "bundle.js",
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
};
