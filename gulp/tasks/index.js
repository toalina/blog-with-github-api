var gulp = require("gulp");
var config = require('../config').html;

gulp.task('index', function() {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});
