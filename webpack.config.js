module.exports = {
  context: __dirname + "/src",
  entry: "./dove-jwt",
  output: {
    path: __dirname + "/docs",
    filename: "dove-jwt.webpack.js"
  },
  resolve: {
    alias: {
      joi: "joi-browser",
      "./ca.js": `./ca-browser.js`
    }
  }
};
