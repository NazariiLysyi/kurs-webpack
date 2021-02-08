const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    },
    devServer:{
        contentBase: path.join(__dirname,"dist"),
        port: 5400,
        watchContentBase: true
    },
    module: {
        rules: [{
        test: /\.scss$/, //zamiana css na scss
        use: [
        "style-loader",
        "css-loader",
        "sass-loader"] //dopisanie komponentu
        },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
        presets: ['@babel/preset-env']
        }
        }
        }]
        }
}