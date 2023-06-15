/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'res.cloudinary.com'],
    },
    experimental: {
        optimizeFonts: true,
        optimizeImages: true,
        scrollRestoration: true,
        scriptLoader: true,
        appDir: true
    },
}

module.exports = nextConfig
