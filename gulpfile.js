var gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require('gulp-rename'),
minifyCSS = require('gulp-minify-css'),
autoprefixer = require('gulp-autoprefixer'),
livereload = require('gulp-livereload'),
server = require('gulp-server-livereload'),
compass = require( 'gulp-for-compass' );
 
gulp.task('sass', function () {
    gulp.src('./scss/style.scss')
        .pipe(compass({
            sassDir: 'scss',
            cssDir: '.',
            imagesDir: 'img',
            javascriptsDir: 'js',
            force: true
        }))
        .pipe(rename("style.css"))
        //.pipe(minifyCSS())
        .pipe(autoprefixer(['last 2 versions']))
        .pipe(gulp.dest('./'));

});


gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      open: true,
      defaultFile: 'index.html'
    }));
});


gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', ['sass'])
	gulp.watch('./scss/**/*.scss', ['sass'])
	gulp.watch('./scss/**/**/*.scss', ['sass'])
});
gulp.task('default', ['sass','watch','webserver']);