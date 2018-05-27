const nodeExternals = require('webpack-node-externals');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// var webpack = require('webpack');
// var HappyPack = require('happypack');

module.exports = {
    /*optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },*/

    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/../build"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            puppeteer: '/usr/local/share/.config/yarn/global/node_modules/puppeteer'
        }
    },

    watchOptions: {
        ignored: [/node_modules/]
    },
    
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension
            { test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    },
                    {
                        loader: "tslint-loader"
                    }
                ] //,
                /* options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true
                }*/
            },

           /* {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true 
                }
            },*/

            /*{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=ts',
            },*/

            /*{
                test: /\.tsx?$/,
                loader: 'tslint-loader'
            },*/

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        /*new HappyPack({
            id: 'ts',
            threads: 2,
            loaders: [
                {
                    path: 'ts-loader',
                    query: { happyPackMode: true }
                }
            ]
        }),*/

        // new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),

        /*new webpack.WatchIgnorePlugin([
            /node_modules/, /public/, /git_modules/
        ])*/
    ],

    target: 'node',

    mode: 'development',

    externals: [
        nodeExternals(), // in order to ignore all modules in node_modules folder
    ] 
};