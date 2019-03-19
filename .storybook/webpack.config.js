// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

const componentConfig = require('../webpack.config');

module.exports = async ({config, mode}) => {
  config.module.rules = config.module.rules.concat(
    componentConfig.module.rules,
  );
  return config;
};
