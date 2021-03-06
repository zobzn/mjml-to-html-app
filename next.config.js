const path = require("path");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        fs: path.resolve(__dirname, "mocks/fs"),
        "uglify-js": path.resolve(__dirname, "mocks/uglify-js"),
      };
    }

    return config;
  },
};
