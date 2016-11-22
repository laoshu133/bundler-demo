const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpBabel = require('gulp-babel');
const gulpBrowserify = require('gulp-browserify');
const gulpSequence = require('gulp-sequence');

gulp.task('babel', () => {
    return gulp.src('src/**/*.js')
        .pipe(gulpBabel())
        .pipe(gulp.dest('lib'));
});

gulp.task('browserify', () => {
    return gulp.src('lib/app.js')
        .pipe(gulpBrowserify({
            // debug: true
        }))
        .pipe(gulp.dest('dist/gulp'));
});

gulp.task('clean', () => {
    return gulp.src('dist/gulp')
        .pipe(gulpClean());
});

gulp.task('default', gulpSequence('clean', 'babel', 'browserify'));