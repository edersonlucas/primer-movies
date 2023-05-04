/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies/1',
        permanent: true,
      },
      {
        source: '/movies',
        destination: '/movies/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
