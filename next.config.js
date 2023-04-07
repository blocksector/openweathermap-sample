module.exports = {
    reactStrictMode: true,
    webpack4: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
    images: {
        domains: ['sangw.in', 'localhost', 'picsum.photos'] // <== Domain name
    }
}