// third-party
const gulp      = require('gulp');
const inlineCss = require('gulp-inline-css');

gulp.task('build', function () {

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
