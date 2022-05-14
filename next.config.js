/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.vectorico.com",
      "platform-lookaside.fbsbx.com",
      "images.pexels.com",
      "scontent.fpen1-1.fna.fbcdn.net"
    ],
  },
};

module.exports = nextConfig;
