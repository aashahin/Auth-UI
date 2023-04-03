/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    domains: ['images.unsplash.com', "tailwindui.com","flowbite.com"],
    },
    env: {
    API_BACKEND: process.env.API_BACKEND,
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
    }
}

module.exports = nextConfig
