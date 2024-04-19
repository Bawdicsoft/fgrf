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
  // images: {
  //   domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname: "/v0/b/fgrf-dc455.appspot.com/**",
  //     },
  // {
  //   protocol: "https",
  //   hostname: "lh3.googleusercontent.com",
  //   port: "",
  //   pathname: "/**",
  // },
  //   ],
  // },
  images: {
    domains: ["firebasestorage.googleapis.com"],
    formats: ["image/webp", "image/jpeg", "image/png", "image/gif"],
  },
};

module.exports = nextConfig;
