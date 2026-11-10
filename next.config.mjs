/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      // new URL('https://test-craft.ddev.site/**'),
      // new URL('https://localhost:1337/**'),
      new URL('http://localhost:1337/**')
    ],
  },
};

export default nextConfig;
