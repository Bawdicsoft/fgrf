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
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname: "/v0/b/fgrf-dc455.appspot.com/o/**",
  //     },
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**/*.jpg", // JPEG format
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**/*.webp", // WebP format
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**/*.png", // PNG format
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**/*.jpeg", // PNG format
      },
      // Add more patterns for other formats as needed
    ],
  },
  // {
  //   protocol: "https",
  //   hostname: "lh3.googleusercontent.com",
  //   port: "",
  //   pathname: "/**",
  // },
};

module.exports = nextConfig;
