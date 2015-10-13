var dest = "./build";
var src = './src';

module.exports = {
  javascript: {
    src: src + '/js/**/*.js',
    dest: dest + '/js/',
    entry: src + '/js/entry.js',
    outputFilename: 'packed.js'
  },
  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest + '/css/',
    settings: {
      indentedSyntax: true,
    }
  },
  index: {
    src: src + "/html/index.html",
    dest: dest + "/"
  },
  html: {
    src: [src + "/html/**/*.html", "!" + src + "/html/index.html"],
    dest: dest + "/html/",
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
