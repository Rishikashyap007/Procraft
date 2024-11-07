/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'blog.resumeintellect.com', 'deanairbuildfe.vercel.app', 'api.resumeintellect.com', 'img.freepik.com','encrypted-tbn0.gstatic.com'], // Added new domain
  },
};

module.exports = nextConfig;



