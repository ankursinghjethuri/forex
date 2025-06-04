/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add your GitHub repo name here
  basePath: '/trendyai-forex', // Replace with your actual repo name
  assetPrefix: '/trendyai-forex/', // Replace with your actual repo name
}

module.exports = nextConfig
