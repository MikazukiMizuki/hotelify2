/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "localhost",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;
