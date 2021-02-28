const mix = require('laravel-mix');
const path = require('path');
const SRC = path.resolve(__dirname, './public/audio');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
        module: {
            rules: [
                {
                    test: /\.wav$/,
                    include: SRC,
                    loader: 'file-loader'
                }
            ]
        }
    }
);
