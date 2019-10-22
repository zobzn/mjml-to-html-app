const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack(config, options) {
    const { isServer } = options;

    return isServer
      ? config
      : {
          ...config,
          resolve: {
            alias: {
              fs: path.resolve(__dirname, "mocks/fs"),
              "uglify-js": path.resolve(__dirname, "mocks/uglify-js")
            }
          }
        };
  }
});