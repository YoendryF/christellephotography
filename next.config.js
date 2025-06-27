/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/christellephotography',
  assetPrefix: '/christellephotography/',
};

module.exports = nextConfig;
