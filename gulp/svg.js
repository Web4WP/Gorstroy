const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgCherio = require('gulp-cheerio');

module.exports = function svgToSprite() {
  return gulp.src("src/img/svg/*.svg")
    .pipe(svgCherio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg"
          }
        },
      }
    ))
    .pipe(gulp.dest("build/img"))
}
