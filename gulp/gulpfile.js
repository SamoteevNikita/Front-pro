const { src, dest, series, watch  } = require('gulp');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');

const gulp = require('gulp');

gulp.task("js", () => {
    return src("src/*.js")
    .pipe(concat('all.js'))
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      .pipe(minify())
      .pipe(dest("dist"));
  });


gulp.task('css', () => {
    return src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("styles/bundle.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist'));
});

gulp.task("default",gulp.series('js', 'css'))


gulp.task("watch", () => {
    gulp.watch('./src/*.scss', series('css'))
    gulp.watch('./src/*.js', series('js'))
})

