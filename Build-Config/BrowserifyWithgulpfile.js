var gulp = require('gulp');
var browserify = require('gulp-browserify');
var gutil = require('gulp-util');

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('browserify', function(){
   return gulp
   .src('./index.js')
   .pipe(browserify() )
   .pipe(gulp.dest('./bin') );
} );

gulp.task('watch', function(){
    gulp.watch(['./*.js'], ['browserify'] );
} );