const path = require("path");
module.exports = {
  //1. especificando el archivo de entrada
  entry: "./client/index.js",
  //2 especificar el archivo de salida

  output: {
    path: "/public", //3 la ruta absoluta de la salida
    filename: "bundle.js", //4 nombre del archivo de salida
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: process.env.PORT || "3000",
    host: "localhost",
  },
};
