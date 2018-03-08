const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require("gulp-watch");
const mocha = require('gulp-mocha');
const jsdoc = require('gulp-jsdoc3');

var exec = require('child_process').exec;

var appFilePath = "testpackage.js";
gulp.task('default', ['watch-test']);

gulp.task('babel', () => {
    return gulp.src(['./src/**/*.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./lib'));
});

gulp.task('babel-test', () => {
  return gulp.src(['./test/' + appFilePath])
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    watch(['./src/**/*.js'], {ignoreInitial: false}, function (file) {
        gulp.start('run-app');
    });
});

gulp.task('watch-test', function () {
  watch(['./src/**/*.js','./test/' + appFilePath], {ignoreInitial: false}, function (file) {
      gulp.start('test-app');
  });
});

gulp.task('test-app', ['babel','babel-test'],function (cb) {
  exec("node " + appFilePath, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
  });
  console.log("called run-app")
});


gulp.task('run-app',['babel'], function (cb) {
    exec("node ./test/dist/" + appFilePath, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    console.log("called run-app")
});

gulp.task('run-mocha', () =>
    gulp.src(['./test/**/*.js','!./test/testpackage.js'], {read: false})
        // `gulp-mocha` needs filepaths so you can't have any plugins before it
        .pipe(mocha({
          //reporter: 'nyan',
          require:'babel-core/register'
      }))
      .once('error', err => {
        console.error(err);
        process.exit(1);
      })
      /* .once('end', () => {
        process.exit();
      }) */
);

gulp.task('watch-mocha', function () {
  watch(['./test/**/*.js','!./test/testpackage.js'], {ignoreInitial: false}, function (file) {
      gulp.start('run-mocha');
  });
});

gulp.task('doc', function (cb) {
  gulp.src(['README.md', './src/**/*.js'], {read: false})
      .pipe(jsdoc(cb));
});
