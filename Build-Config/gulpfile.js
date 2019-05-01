var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var port = process.env.PORT || config.defaultPort;

// setup Task listing will show all tasks
gulp.task('help', $.taskListing);

gulp.task('default', ['help']);

gulp.task('test', function(){
    log('test gulp task !!!')
} );

gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});


gulp.task('fonts', ['clean-fonts'], function(){
    log('Copying fonts ---- > Build');
    return gulp
    .src(config.fonts)
    .pipe(gulp.dest(config.build + 'fonts'));
});

gulp.task('images', ['clean-images'], function(){
    log('Copying and Compressing images ----> build');
    return gulp
    .src(config.images)
    .pipe($.imagemin({optimizationLevel: 4}))
    .pipe(gulp.dest(config.build + 'images'));
});

// Clean Everything from build and temp Folder
gulp.task('clean', function(done){
    var delconfig = [].concat(config.build, config.temp);
    log('Cleaning: ' + $.util.colors.red(delconfig));
    del(delconfig, done);
});

gulp.task('clean-styles', function(done) {
    log('Cleanig css from temp folder...');
    
    clean(config.temp + '**/*.css', done);
});

gulp.task('clean-fonts', function(done){
    log('Cleanig fornt from build folder...');
    
    clean(config.build + 'fonts/**/*.*', done);
});

gulp.task('clean-images', function(done){
    log('Cleaning images from build folder...');
    
    clean(config.build + 'images/**/*.*', done);
});

gulp.task('clean-code', function(done){
    var files = [].concat(
    config.temp + '**/*.js',
    config.build + '**/*.html',
    config.build + 'js/**/*.js'
    );
    clean(files, done);
});

gulp.task('template', [ 'grunt-template-cache' ], function() {
    
    log('This will create two templateCache file namely templates.js and common.js in temp Dir..')
});

gulp.task('copy', function() {
    return gulp
    .src(config.libSource)
    .pipe(gulp.dest(config.client + 'vendor/'))
});

gulp.task('inject', ['sass'], function() {
    log('Wire up the app css into the html, and call wiredep ');

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
