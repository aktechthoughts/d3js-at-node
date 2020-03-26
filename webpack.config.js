const path = require('path');

module.exports = {
  entry: './scripts/index.js',
  mode : 'development',
  output: {
    path: path.resolve(__dirname, 'static/lib'),
    filename: 'bundle.js'
  }
};