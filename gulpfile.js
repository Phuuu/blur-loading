var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// compile scss into css

function style() {
    // sass file location
    return gulp.src('./scss/**/*.scss')
    //compile sass
    .pipe(sass().on('error', sass.logError))
    //save compiled sass
    .pipe(gulp.dest('./css'))
    //sync all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss**/*.scss', style)
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', ).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;