const gulp = require('gulp')

module.exports = function cssLib() {
  return gulp.src('src/css/lib/**/*.css')
    .pipe(gulp.dest('build/css/lib'))
}
