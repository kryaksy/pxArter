var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['styles','copy-html','copy-images'],function () {
	gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('./index.html',['copy-html']);
    gulp.watch('./dist/index.html').on('change', browserSync.reload);

    browserSync.init({
         server: "./dist"
    });
});

gulp.task('styles',function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
		.pipe(autoprefixer({
			'browsers':['last 2 versions']
		}))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('copy-html',function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-images',function () {
    gulp.src('./img/*')
        .pipe(gulp.dest('./dist/img'));
});
