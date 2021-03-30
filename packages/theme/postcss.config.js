module.exports = (context) => {
  const isProd = context.env === 'production';

  return {
    map: context.options.map,
    plugins: {
      'postcss-import': {
        root: context.file.dirname,
      },
      'postcss-extend': {},
      cssnano: isProd ? {} : false,
    },
  };
};
