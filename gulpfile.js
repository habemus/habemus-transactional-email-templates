// native
const path = require('path');

// third-party
const gulp      = require('gulp');
const rimraf    = require('rimraf');
const inlineCss = require('gulp-inline-css');

gulp.task('build', function () {

  rimraf.sync(path.join(__dirname, 'dist'));

  return gulp.src('src/**/*.html')
    .pipe(inlineCss({
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true,
      // important
      preserveMediaQueries: true
    }))
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['build']);
