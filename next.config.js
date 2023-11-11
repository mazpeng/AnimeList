/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.myanimelist.net" }],
    domains: ["placehold.co"],
  },
};

module.exports = nextConfig;
