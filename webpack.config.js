module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: ['app/components/', 'node_modules'],
        alias: {
            Main: 'Main.jsx',
            Nav: 'Nav.jsx',
            Container: 'Container.jsx',
            Weather: 'weather.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }, ]
    }
};