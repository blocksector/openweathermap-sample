module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
    images: {
        domains: ['sangw.in', 'localhost', 'picsum.photos', 'openweathermap.org'] // <== Domain name
    }
}