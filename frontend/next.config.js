/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://fgrf-iomt.vercel.app/:path*",
      },
    ];
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com/v0/b/fgrf-dc455.appspot.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
