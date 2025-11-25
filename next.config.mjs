/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  compiler: {
    // enable Next.js built-in styled-components support (SSR + display names)
    styledComponents: true,
  },
};

export default nextConfig;
