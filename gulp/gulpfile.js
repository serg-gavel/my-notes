//npm init
//gulp: npm i -g gulp
//      npm i gulp --save-dev
// minify HTML:  npm i gulp-html-minify --save-dev
// minify CSS:   npm i --save-dev gulp-cssmin
// minify JS:    npm i --save-dev gulp-minify
// sass:         npm i gulp-sass --save-dev
// image minify: npm i --save-dev gulp-image
// browser sync: npm i browser-sync --save-dev

var gulp = require('gulp'),
    htmlminify = require("gulp-html-minify"),
    cssmin = require('gulp-cssmin'),
    // rename = require('gulp-rename'),
    minify = require('gulp-minify'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    image = require('gulp-image');
//command for minify html,css,js ---  gulp min
gulp.task('min', function () {

    gulp.src('src/**/*.css')
        .pipe(cssmin())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
    gulp.src('src/**/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist'));
    gulp.src('./src/**/img/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest('dist'));
    return gulp.src("./src/**/*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("dist"))

});
//gulp sass
gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify:false
    });
});
//gulp watch
gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/**/*.css', browserSync.reload);
    gulp.watch('src/**/*.js', browserSync.reload);
});