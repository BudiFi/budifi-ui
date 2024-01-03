const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = withPlugins([
    [
        withImages,
        {
            swcMinify: true,
            images: {
                disableStaticImages: true,
            },
        },
    ],
]);

module.exports = nextConfig;
