/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'nli.ie'
      },
       {
      protocol: 'https',
      hostname: 'picsum.photos'
    }
    ]
  }
};

export default nextConfig;
