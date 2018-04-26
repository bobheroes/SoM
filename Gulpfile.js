var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function(){
	return gulp.src(['./app/sass/style.scss'])
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest('./app/css'))
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(browserSync.stream());
});

gulp.task('serve', ['scss'], function() {

    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

  gulp.watch('./app/sass/*.scss', ['scss']);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
});


gulp.task('watch', function () {
  gulp.watch('./app/sass/*.scss', ['scss']);
});

gulp.task('default', ['scss', 'watch', 'serve']);
