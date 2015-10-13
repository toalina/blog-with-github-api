var dest = "./build";
var src = './src';

module.exports = {
  javascript: {
    src: src + '/js/**/*.js',
    dest: dest + '/js/',
    entry: src + '/js/entry.js',
    outputFilename: 'packed.js'
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest + '/assets/'
  },
  sass: {
    src: src + "/sass/**/*.scss",
    dest: dest + '/css/'
  },
  html: {
    src: src + "/templates/*.html",
    dest: dest + "/templates/",
  },
  server: {
    src: dest,
    livereload: true,
    directoryListing: false,
    open: false,
    port: 9000
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest
  }
};
