// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: './bundle.js'
  },
  module: {
  	// Apply `noParse` to Tangram to prevent mangling of UMD boilerplate
    noParse: /tangram\/dist\/tangram/
  }
};