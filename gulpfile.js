'use strict';

const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass')(require('sass')),
	postcss = require('gulp-postcss'),
	fileinclude = require('gulp-file-include');


gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("layouts/**/*.html").on('change', browserSync.reload);
    gulp.watch("assets/scss/**/*.scss").on('change', browserSync.reload);
});

gulp.task('fileinclude', function () {
    return gulp.src('layouts/pages/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'))
});

// Styles
gulp.task('styles', function() {
	return gulp.src('assets/scss/style.scss')
		.pipe(sass.sync({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(postcss([
			require('autoprefixer')(),
			require('postcss-sort-media-queries')(),
			require('postcss-csso')()
		]))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());
})


gulp.task('watch', function () {
    gulp.watch('layouts/**/*.html', gulp.parallel('fileinclude'));
    gulp.watch('assets/scss/**/*.scss', gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('server',
	'watch',
	'fileinclude', 
	'styles',
));