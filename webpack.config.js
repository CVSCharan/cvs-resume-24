const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          "style-loader", // Inject CSS into the DOM
          "css-loader", // Translate CSS into CommonJS
          "sass-loader", // Compile Sass to CSS
        ],
      },
    ],
  },
};
