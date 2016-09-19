var webpack=require("webpack");
var path=require("path");

module.exports={
	entry:'./app/exam.js',
	output:{
		path:path.join(__dirname,'lib'),
		filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loaders:'style!css'
		},{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'jsx-loader'
		}]
	},
	plugins:[]
};