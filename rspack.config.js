const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: {
		// main: "./src/main.js"
		index: './src/index.js',
		another: './src/answer.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all',
	// 	}
	// },
	builtins: {
		html: [
			{
				template: "./index.html",
				title: 'React',
				favicon: './src/assets/icon.png'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					experimentalInlineMatchResource: true
				}
			},
			{
				test: /\.svg/,
				type: "asset/resource"
			},
			{
				test: /\.png$/,
				//使用 asset/inline 模式的好处是能省去HTTP请求，因为资源已经内嵌到了代码中。但如果资源文件较大，那么它会增加你的JS文件的大小，可能会影响页面的加载性能，所以应适度使用。
				//'asset/inline': 将资源转换为 DataURI，使用 Base64 编码，暂不支持编码配置
				//'asset/resource': 将资源转换为单独的文件，并且导出产物地址
				type: 'asset',
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: {
									tailwindcss: {},
									autoprefixer: {},
								},
							},
						},
					},
				],
				type: 'css',
			},
		]
	}
};
module.exports = config;
