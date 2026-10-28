import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/proffer", destination: "/our-services/proffer-ai", permanent: true },
      { source: "/solutions/technology-saas", destination: "/industries/technology-saas", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/services/impact-sphere/best-fit-account-identification", destination: "/our-services/target-account-identification", permanent: true },
      { source: "/services/prospect-pinnacle", destination: "/our-services/prospect-pinnacle-targeted-b2b-lead-gen-solutions", permanent: true },
      ...["leadcert", "verifysure", "trustcheck", "clearboard", "predictwise"].map((module) => ({
        source: `/proffer/${module}`,
        destination: `/our-services/proffer-ai#${module}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
