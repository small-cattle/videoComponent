const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports = {
    entry:"./src/main.ts",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },

    resolve:{
        extensions:[".ts",".js",".json"]
    },

    devServer:{
        static:path.join(__dirname,"dist"),
        open:true,
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.ts$/,
                use:["ts-loader"],
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),

        new CleanWebpackPlugin()
    ],
    mode:"development"
}