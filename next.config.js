/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.myanimelist.net" },
      { hostname: "avatars.githubusercontent.com" }, // Added hostname for GitHub avatars
    ],
    domains: ["placehold.co"],
  },
};

module.exports = nextConfig;
