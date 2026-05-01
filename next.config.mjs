/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        // port: "",
        pathname: "/images/media/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        // port: "",
        pathname: "/api/portraits/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/food-details/:id",
        destination: "/foods/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
