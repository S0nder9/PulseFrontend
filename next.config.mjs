/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  serverActions: {
  allowedForwardedHosts: ['811q79f5-3000.euw.devtunnels.ms'],
  allowedOrigins: ["https://811q79f5-3000.euw.devtunnels.ms"],
  },
  },
  reactStrictMode: false,
  images: {
remotePatterns:[{
protocol: 'https',
hostname: "images.squarespace-cdn.com",

}]
  }
  };
export default nextConfig;
