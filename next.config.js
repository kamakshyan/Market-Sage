/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "fakestoreapi.com",
    ],
  },
}

module.exports = nextConfig
