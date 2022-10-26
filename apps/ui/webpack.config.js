const { merge } = require('webpack-merge');

module.exports = (config) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.ttf$/,
          use: 'file-loader',
        },
      ],
    },
  });
};
