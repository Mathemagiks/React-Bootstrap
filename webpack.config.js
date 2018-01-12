const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:['babel-polyfill','./source/client.js'],
	output:{
		path:"./",
		filename:'index.js'
	},
 devServer:{
 	inline:true,
 	contentBase:'./public',
 	port:3000
 },
 module:{
 	loaders: [
 	{ test:/\.js$/,
 	  exclude:/node_modules/,
 	  loader:'babel-loader'
 	},
 	{ test:/\.css$/, 
 	  loader: ExtractTextPlugin.extract(['css-loader'])
 },
 { test:/\.(sass |scss)$/, 
 	  loader: ExtractTextPlugin.extract(['css-loader','sass-loader'])
 }
 	]
 },
 plugins:[
   new ExtractTextPlugin("app.css")
 ]
};