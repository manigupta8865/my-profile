/** @type {import('next').NextConfig} */
const packageJson = require('./package.json');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    RESTURANT_APPD_BRUM_API_KEY: process.env.RESTURANT_APPD_BRUM_API_KEY,
    APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY: process.env.APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    RESTURANT_APPD_BRUM_API_KEY: process.env.RESTURANT_APPD_BRUM_API_KEY,
    APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY: process.env.APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
  env: {
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version,
    BUILD_TIME: new Date().getTime().toString(10),
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.modules = [path.resolve(__dirname, 'node_modules'), 'node_modules'];
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
  rewrites: async () => [
    {
      source: '/en-gb/locations/:restaurantState/:restaurantArea/:path',
      destination: '/:path?restaurantState=:restaurantState&restaurantArea=:restaurantArea',
    },
    {
      source: '/en-gb/locations/:restaurantArea/:path',
      destination: '/:path?restaurantArea=:restaurantArea',
    },
  ],
};
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}
