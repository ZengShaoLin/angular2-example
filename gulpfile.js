var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var argv = require('yargs').argv;

var jsPath = [argv.example + '/src/*.js', argv.example + 'src/**/*.js'];

gulp.task('js', function() {
    if(typeof argv.example !== 'string' || argv.example === '') {
        throw new Error('--example parameter is needed and content cant be null');
    }

    return gulp.src(jsPath)
        .pipe(babel({
            presets: ['es2015'],
            plugins: [
                'transform-remove-strict-mode', 
                'transform-decorators-legacy'
            ]
        }))
        .pipe(gulp.dest('./' + argv.example + '/dist/'));
});

gulp.task('jsWatch', ['js'], function() {
    browserSync.reload();
});

gulp.task('serve', ['js'], function() {
    watch(jsPath, function() {
        gulp.start('jsWatch');
    });
    watch([argv.example + '.html', argv.example + '/css/*.css', argv.example + '/src/*.html', argv.example + '/src/**/*.html'], function() {
        browserSync.reload();
    });

    browserSync.init({
        server: {
            baseDir: './',
            index: argv.example + '.html'
        },
        host: 'localhost',
        port: argv.port || 3000,
        ghostMode: false
    });
});