const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
    mode: "development",
    entry: "./src/start.js",
    output: { 
        filename: "main.js",
        path: path.resolve(__dirname, "output"),
        clean: true,
    }, 
    devtool: "eval-source-map",
    devServer: { 
        watchFiles: ["./src/ToDoList.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/ToDoList.html",
        }),
    ],
    module : { 
        rules: [
            { 
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ],
    },
};