/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/IIT-Delhi-DMS',
  assetPrefix: '/IIT-Delhi-DMS/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
