const gulp = require('gulp');
const server = require("browser-sync").create();
const pug2Html = require('../gulp/pug');
const scss2Css = require('../gulp/scss');
const imgMin = require('../gulp/image');
const svgSprite = require('../gulp/svg');
const copyFonts = require('../gulp/copyFonts');
const copyCSS = require('../gulp/copyCssLib');
const copyJS = require('../gulp/copyJsLib');


function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    ui: false,
    cors: true
  })
  gulp.watch('src/pug/**/*.pug', gulp.series(pug2Html))
  gulp.watch('src/css/**/*.scss', gulp.series(scss2Css))
  gulp.watch('src/css/lib/**/.css', gulp.series(copyCSS, readyReload))
  gulp.watch('src/js/**/*.js', gulp.series(readyReload))
  gulp.watch('src/js/lib/**', gulp.series(copyJS, readyReload))
  gulp.watch('src/fonts', gulp.series(copyFonts, readyReload))
  gulp.watch('src/img/**/*.{gif,png,jpg,svg,webp,ico}', gulp.series(imgMin, readyReload))
  gulp.watch('src/img/svg/*.svg', gulp.series(svgSprite, readyReload))
  return cb()
}
