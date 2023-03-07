const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		host: 'localhost',
		port: PORT,
		historyApiFallback: true,
		open: true,
		hot: true,
	},
});
