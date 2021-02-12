module.exports = (api) => {
  api.cache.forever();

  const presets = ['@babel/preset-env'];

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    //   ['@babel/plugin-proposal-decorators', { legacy: true }],
    //   ['@babel/plugin-proposal-class-properties', { loose: false }],
    //   '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', { root: ['./src'] }],
  ];

  return {
    presets,
    plugins,
  };
};
