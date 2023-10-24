const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "@components": path.resolve(__dirname, "../src/components"),
            "@utils": path.resolve(__dirname, "../src/utils")
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                type: "asset",
                exclude: [path.resolve(__dirname, "src/assets/imgs")],
                generator: {
                    filename: "imgs/[name].[contenthash][ext]",
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: "asset",
                generator: {
                    filename: "fonts/[name].[contenthash][ext]",
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                type: "asset",
                exclude: [path.resolve(__dirname, "src/assets/medias")],
                generator: {
                    filename: "medias/[name].[contenthash][ext]",
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", ["@babel/preset-react", { "runtime": "automatic" }]],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-proposal-class-properties",
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
    ],
};