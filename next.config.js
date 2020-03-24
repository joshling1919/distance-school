require('dotenv').config();
const withLess = require('@zeit/next-less');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      '@font-size-base': '16px',
      '@text-color': 'rgba(0, 0, 0, 0.85)',
      '@text-color-secondary': 'rgba(0, 0, 0, 0.80)',
    }, // make your antd custom effective
  },
  env: {
    STRAPI_ENDPOINT: process.env.STRAPI_ENDPOINT,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config;
  },
});
