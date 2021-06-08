const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const bemValidator = require('gulp-html-bem-validator');
const htmlValidator = require('gulp-w3cjs');

module.exports = function pugToHtml() {
  return gulp.src("src/pug/pages/*.pug")
    .pipe(plumber())
    .pipe(pug({ pretty:true }))
    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest("build"))
}
