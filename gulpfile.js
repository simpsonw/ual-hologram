"use strict";
var gulp  = require('gulp'),
		livereload = require('gulp-livereload'),
		hologram = require('gulp-hologram');

gulp.task('hologram', function() {
        gulp.src('config.yml')
					.pipe(hologram())
					.pipe(livereload());
});

gulp.task('watchFiles', function(){
	livereload.listen();
	gulp.watch(['components/**', 'templates/**'], ['hologram']);
});

gulp.task("default", ['hologram', 'watchFiles']);
