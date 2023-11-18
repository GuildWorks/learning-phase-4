/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['cdn2.thecatapi.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
