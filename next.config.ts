import type { NextConfig } from 'next';
const config: NextConfig = { poweredByHeader: false, experimental: { useTypeScriptCli: false }, output: 'export', images: {unoptimized: true}, trailingSlash: true };
export default config;
