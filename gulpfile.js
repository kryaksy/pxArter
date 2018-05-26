var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['styles','copy-html','copy-images'],function () {
	gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('./index.html',['copy-html']);

    browserSync.init({
         server: "./dist"
    });
});

browserSync.stream();

gulp.task('styles',function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(autoprefixer({
			'browsers':['last 2 versions']
		}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-html',function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-images',function () {
    gulp.src('./img/*')
        .pipe(gulp.dest('./dist/img'));
});
