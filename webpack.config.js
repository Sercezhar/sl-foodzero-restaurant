const config = {
  mode: 'production',
  entry: {
    app: './src/js/app.js',
    menu: './src/js/menu.js',
    blogs: './src/js/blogs.js',
  },
  output: {
    filename: '[name].min.js',
  },
};

module.exports = config;
