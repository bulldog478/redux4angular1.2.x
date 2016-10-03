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
				loader:'babel',
				exclude:/node_modules/,
				query:{
					presets:['es2015'],
					plugins:['transform-runtime']
				}
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