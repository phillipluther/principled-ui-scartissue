module.exports = (context) => {
  const isProd = context.env === 'production';
  const useInlineMap = isProd;

  return {
    map: { inline: useInlineMap },
    plugins: {
      'postcss-import': {
        root: context.file.dirname,
      },
      cssnano: isProd ? {} : false,
    },
  };
};
