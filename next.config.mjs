/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [50, 75],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  // 301s from every route of the old site to the nearest surviving page.
  async redirects() {
    return [
      { source: "/capabilities", destination: "/supply", permanent: true },
      { source: "/global-sourcing", destination: "/supply", permanent: true },
      { source: "/import-export", destination: "/supply", permanent: true },
      { source: "/products", destination: "/supply", permanent: true },
      { source: "/why-mettco", destination: "/about", permanent: true },
      { source: "/vision", destination: "/about", permanent: true },
      { source: "/business-development", destination: "/services", permanent: true },
      { source: "/solutions", destination: "/technology", permanent: true },
      { source: "/process", destination: "/", permanent: true },
      { source: "/request-a-quote", destination: "/rfq", permanent: true },
      { source: "/industries", destination: "/sectors/industry", permanent: true },
      { source: "/industries/banking-financial", destination: "/sectors/banking", permanent: true },
      { source: "/industries/agriculture", destination: "/sectors/agriculture", permanent: true },
      { source: "/industries/:slug*", destination: "/sectors/industry", permanent: true },
    ];
  },
};

export default nextConfig;
