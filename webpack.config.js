const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');
const path=require('path');

const nodeENV=process.env.NODE_ENV || 'development';
const isProd = nodeENV === 'production';

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

const plugins=[
    new HtmlWebpackPlugin({template:'./index.html'}),
    new webpack.ProvidePlugin({
        React:'react'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['react','react-router','candy-mobile','common'],
        minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeENV)
        }
    }),
    new webpack.NamedModulesPlugin()
];

if(isProd){
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
    }),new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }));
}else{
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports={
    context: sourcePath,
    entry:{
        index:'./index.js',
        react:['react','react-dom','react-redux','redux','redux-thunk','redux-logger',],
        'react-router':['react-router','react-router-redux'],
        'candy-mobile':'candy-mobile',
        common:['classnames','isomorphic-fetch','query-string']
    },
    output:{
        path:distPath,
        filename:'[name].[hash:6].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },{
                test:   /\.css/,
                use: ['style-loader', "css-loader"]
            },
            {
                test:   /\.scss/,
                use: ['style-loader', "css-loader","px2rem-loader", "sass-loader"]
            },
            {
                test: /\.png$/,
                use: 'file-loader?name=[md5:hash:base64:10].[ext]'
            }, {
                test: /\.jpg$/,
                use: 'file-loader?name=[md5:hash:base64:10].[ext]'
            },
            {
                test: /\.gif$/,
                use: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.json$/,
                use: 'json'
            }, {
                test: /\.md$/,
                use: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            sourcePath
        ]
    },
    devtool: isProd ? 'source-map' : 'eval',
    plugins:plugins,
    devServer:{
        host:'0.0.0.0',
        proxy:{
            /*'/api':{
                target:'http://m.bole.ifchange.com',
                pathRewrite: {'^/api' : ''},
                secure: false,
                changeOrigin: true
            }*/
        }
    }
};
