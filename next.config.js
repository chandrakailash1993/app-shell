/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    home: `home@${process.env.HOME_APP_ENDPOINT}/_next/static/${location}/remoteEntry.js`,
    product: `product@${process.env.PRODUCT_APP_ENDPOINT}/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "shell",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./layout": "./components/organisms/Layout/index.js",
          "./pokemonItem": "./components/molecules/PokemonItem/index.js",
          "./hooks": "./hooks/index.js",
          "./utils": "./utils/index.js",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
