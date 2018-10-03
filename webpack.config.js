var path = require('path');

module.exports = {
  mode: 'none',

  entry: {
    main: path.resolve(__dirname, 'js/app.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundles.js',
    publicPath: '/dist/'
  },

    
}