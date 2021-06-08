const gulp = require('gulp')

module.exports = function jsLib() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'))
}
