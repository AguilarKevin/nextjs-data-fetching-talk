/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['components', 'pages', 'sections', 'theme', 'utils'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
