var dest = "./build";
var src = './src';

module.exports = {
  javascript: {
    src: src + '/js/**/*.js',
    dest: dest + '/js/',
    entry: src + '/js/app.js',
    outputFilename: 'app.js'
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest + '/assets/'
  },
  sass: {
    src: src + "/css/**/*.{sass,scss}",
    dest: dest + '/css/',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
    }
  },
  html: {
    src: src + '/**/*.html',
    dest: dest
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
    cssDest: dest + '/css/',
    jsDest: dest + '/js/',
  }
};
