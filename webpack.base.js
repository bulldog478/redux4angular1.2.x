var join  = require('path').join

module.exports = (function(){
	var config = {}

	config.module = {
		resolveLoader: {
			root:join(__dirname,"node_modules")
		},
		loaders : [
			{
				test:/\.js$/,
				loader:'babel'
			},
			{
				test:/\.html/,
				loader:'html'
			}
		]
	},
	config.devtool = "sourcemap"
	return config
})()