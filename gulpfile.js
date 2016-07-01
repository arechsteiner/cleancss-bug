"use strict";

var gulp  = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCss = require('gulp-clean-css');

gulp.task('default', function() {
    return gulp .src('scss/**/*.scss')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('dist/css/'))
                .pipe(cleanCss())
                .pipe(gulp.dest('dist/css/min/'));
});
