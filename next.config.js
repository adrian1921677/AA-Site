/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: require('path').join(__dirname),
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
  // Keine Rewrites oder Middleware nötig - SYNO läuft auf Subdomain syno.abdullahu-adrian.de
}

module.exports = nextConfig
