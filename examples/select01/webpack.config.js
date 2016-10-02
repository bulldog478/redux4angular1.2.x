var resolve = require("path").resolve
var webpackConfig  = require('../../webpack.base.js')
console.log(__dirname)
webpackConfig.entry = resolve(__dirname, "index.js")
webpackConfig.output = {
	path:resolve(__dirname,"dist"),
	publicPath:'dist/',
	filename:'bundle.js'
}

module.exports = webpackConfig