/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: require('path').join(__dirname),
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/SYNO/:path*',
        destination: 'https://testsyno-pbwh.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
