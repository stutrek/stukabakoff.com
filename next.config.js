module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/umami.js',
                destination: 'https://umami.stutrek.com/umami.js',
            },
            {
                source: '/api/collect',
                destination: 'https://umami.stutrek.com/api/collect',
            },
        ];
    },
};
