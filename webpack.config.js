const path = require("path");
module.exports=(env)=>{
    const isproduction = env === 'production';

    return {
        // entry: "./src/app.js",
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public/scripts"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.jsx?$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                }
            ]
        },
        devtool: isproduction? "source-map":"cheap-module-eval-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true
        }
    };
}