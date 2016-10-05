var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var argv = require('yargs').argv;

gulp.task('js', function() {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-remove-strict-mode']
        }))
        .pipe(concat('es5.bundle.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('jsWatch', ['js'], function() {
    browserSync.reload();
});

gulp.task('serve', ['js'], function() {
    watch('js/*.js', function() {
        gulp.start('jsWatch');
    });
    watch(['index.html', 'css/*.css'], function() {
        browserSync.reload();
    });

    browserSync.init({
        server: {
            baseDir: './'
        },
        host: 'localhost',
        port: argv.port || 3000,
        ghostMode: false
    });
});