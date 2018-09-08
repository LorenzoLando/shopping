
const path = require('path');
//vogliamo creare un oggetto che configuri webpack
module.exports = {
  //indichiamo quale file webpack deve guardare per applicare le sue funzionalita`
  entry: "./app/assets/scripts/App.js",
  output: {
        filename: 'App.js',
        path: path.resolve(__dirname, './app/temp/scripts')
    },
  //da qui parte la configurazione di Babel
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        //regualr expression che dice a babel che lo vogliamo applicare solo ai file .js
        test: /\.js$/,
        //voglio escludere dal babel i file.js che sono i moduli di node
        exclude: /node_modules/
      }
    ]
  }
}