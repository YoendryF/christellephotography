/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/christellephotography',
  assetPrefix: '/christellephotography',
  output: 'export',
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
