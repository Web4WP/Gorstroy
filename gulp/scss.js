const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const shorthand = require('gulp-shorthand');
const cssComb = require('gulp-csscomb');
const cssBeautify = require('gulp-cssbeautify');

module.exports = function scssToCss() {
  return gulp.src("src/css/*.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer( {cascade: false}))
    .pipe(shorthand())
    .pipe(cleanCSS({debug: true, level: 2, compatibility: '*'}))
    .pipe(cssBeautify())
    .pipe(cssComb())
    .pipe(gulp.dest("build/css"))
}
