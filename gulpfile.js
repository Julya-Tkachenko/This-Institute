const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');

// Компиляция SCSS → CSS
function buildCSS() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
}

// Наблюдение за файлами
function watchFiles() {
  gulp.watch('scss/**/*.scss', buildCSS);
}

exports.build = buildCSS;
exports.watch = watchFiles;
exports.default = gulp.series(buildCSS, watchFiles);
