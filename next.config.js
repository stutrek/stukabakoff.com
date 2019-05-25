const path = require('path');

const composePlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withWorkers = require('@zeit/next-workers');
const withOffline = require('next-offline');
const withReactSvg = require('next-react-svg');

module.exports = composePlugins([
    [withOffline],
    [withWorkers],
    [
        withReactSvg,
        {
            include: path.resolve(__dirname, 'assets/svg'),
        },
    ],
    [
        withCSS,
        {
            cssModules: true,
        },
    ],
]);
