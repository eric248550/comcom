/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@comcom/ui', '@comcom/types', '@comcom/db'],
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
}

export default nextConfig
