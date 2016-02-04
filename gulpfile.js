
(function() {
    "use strict";

    // Load gulp plugins.
    var gulp       = require('gulp'),
        concat     = require('gulp-concat'),
        uglifycss  = require('gulp-uglifycss'),
        uglify     = require('gulp-uglify'),
        livereload = require('gulp-livereload');


    /**
     * Reload on change.
     */
    gulp.task('reload', function() {
        gulp.src('public/')
            .pipe(livereload());
    });


    /**
     * Monitors changes in projects files and apply changes instantly.
     * Use with livereload chrome extension.
     * Reference: https://github.com/vohof/gulp-livereload
     */
    gulp.task('watch', function() {
        var files = [
            'public/stylesheets/**/*.css',
            'public/scripts/**/*.js',
            'public/**/*.html'
        ];

        livereload.listen();

        gulp.watch(files, ['reload']);
    });


    /**
     * Concatenate and minify css files.
     */
    gulp.task('css', function() {
        return gulp.src('public/stylesheets/*.css')
            .pipe(concat('styles.min.css'))
            .pipe(gulp.dest('public/stylesheets/'));
    });


    /**
     * Concatenate and minify js files.
     */
    gulp.task('js', function() {
        return gulp.src('public/scripts/*.js')
            .pipe(concat('scripts.min.css'))
            .pipe(gulp.dest('public/scripts/'));
    });

})();