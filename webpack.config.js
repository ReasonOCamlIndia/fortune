const Path = require("path");

let buildFolder = Path.join(__dirname, "_build/default/web");

module.exports = (env) => ({
  devtool: env.production ? false : "inline-cheap-module-source-map",
  entry: {
    app: Path.join(buildFolder, "/app/web/main.js"),
  },
  mode: 'development',
  output: {
    path: Path.join(__dirname, "static"),
    filename: "[name].js",
  },
});
