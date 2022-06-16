const path = require('path');

const source = path.resolve(__dirname, 'src');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.png']
    },

    module: {
        rules: [
            {
                test: /\.png$/,
                include: source,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                loader: "file-loader"
            },  
        ]
    }
    
}