/* eslint-disable */
const path = require('path');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withImages(withCSS({
    distDir: 'dist',
    cssModules: true,
    useFileSystemPublicRoutes: false,
    poweredByHeader: false,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:10]',
    },
    webpack(config, { dev }) {
        if(!dev) {
            if(!Array.isArray(config.optimization.minimizer))
                config.optimization.minimizer = [];
            config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        }
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['ui'] = path.join(__dirname, 'ui');
        config.resolve.alias['lib'] = path.join(__dirname, 'lib');
        config.resolve.alias['hooks'] = path.join(__dirname, 'hooks');
        return config;
    },
}));