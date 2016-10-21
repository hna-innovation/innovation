var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var rev = require('gulp-rev');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');

var buildDir = path.resolve('build');

gulp.task('clean', function(done) {
  return del([buildDir], done);
});

gulp.task('style-copy-icon', function(done) {
  gulp.src('www/css/icon/**/*.*')
    .pipe(gulp.dest(path.join(buildDir, 'css/icon')))
    .on('end', done);
});

gulp.task('style-copy-lib', function(done) {
  gulp.src('www/css/lib/**/*.*')
      .pipe(gulp.dest(path.join(buildDir, 'css/lib')))
      .on('end', done);
});

gulp.task('style-css', function (done) {
    gulp.src('www/css/*.css')
        .pipe(concat('css.min.css'))
        .pipe(minifyCss({
          keepSpecialComments: 0
         }))
        .pipe(rev())
        .pipe(gulp.dest(path.join(buildDir, 'css')))
        .on('end', done);
})

gulp.task('style-resources', function (done) {
    gulp.src('www/css/resources/**/*.css')
        .pipe(concat('resources.min.css'))
        .pipe(minifyCss({
          keepSpecialComments: 0
         }))
        .pipe(rev())
        .pipe(gulp.dest(path.join(buildDir, 'css/resources')))
        .on('end', done);
})

gulp.task('style-vendor', function (done) {
  gulp.src('www/css/vendor/**/*.css')
      .pipe(concat('vendor.min.css'))
      .pipe(minifyCss({
        keepSpecialComments: 0
       }))
      .pipe(rev())
      .pipe(gulp.dest(path.join(buildDir, 'css/vendor')))
      .on('end', done);
})

gulp.task('image-copy', function (done) {
  gulp.src('www/img/**/*.*')
      .pipe(gulp.dest(path.join(buildDir, 'img')))
      .on('end', done);
})

gulp.task('js-copy', function (done) {
  gulp.src('www/js/**/*.*')
      .pipe(gulp.dest(path.join(buildDir, 'js')))
      .on('end', done);
})

gulp.task('templates-copy', function (done) {
  gulp.src('www/templates/**/*.*')
      .pipe(gulp.dest(path.join(buildDir, 'templates')))
      .on('end', done);
})

gulp.task('favicon-copy', function (done) {
  gulp.src('www/favicon.ico')
      .pipe(gulp.dest(buildDir))
      .on('end', done);
})

gulp.task('js-vendor-concat', function (done) {
  gulp.src('www/js/vendor/**/*.js')
      .pipe(concat('vendor.min.js'))
      .pipe(rev())
      .pipe(gulp.dest(path.join(buildDir, 'js/vendor')))
      .on('end', done);
})

gulp.task('inject-index', function (done) {
  var _inject = function(src, tag) {
    return inject(src, {
      starttag: '<!-- inject:' + tag + ':{{ext}} -->',
      addRootSlash: false
    });
  };

  gulp.src('www/index.html')
    .pipe(_inject(gulp.src("css/css*", { cwd: buildDir, read: false }), 'style-css'))
    .pipe(_inject(gulp.src("css/resources/resources*", { cwd: buildDir, read: false }), 'style-resources'))
    .pipe(_inject(gulp.src("css/vendor/vendor*", { cwd: buildDir, read: false }), 'style-vendor'))
    .pipe(_inject(gulp.src("js/vendor/vendor*", { cwd: buildDir, read: false }), 'script-vendor'))
    .pipe(gulp.dest(buildDir))
    .on('end', done);
})

gulp.task('build', function(done) {
  runSequence(
  'clean',
  [
    // css files
    'style-copy-icon', 'style-copy-lib', 'style-css', 'style-resources', 'style-vendor',

    //js files
    'js-vendor-concat',

    // image files
    'image-copy', 'js-copy', 'templates-copy', 'favicon-copy'
  ],
  'inject-index')
});
