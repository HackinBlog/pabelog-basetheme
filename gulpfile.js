const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('sass', function () {
    return gulp.src('assets/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
});

gulp.task('clean', () => {
    return del([
        'style.css',
        'assets/css/tachyons.css'
    ]);
});

gulp.task('tachyons-sass', function () {
    return gulp.src(['node_modules/tachyons-sass/scss/*']).pipe(gulp.dest('assets/sass/tachyons/'));
});

gulp.task('tachyons', function () {
   return gulp.src('assets/sass/tachyons.scss')
       .pipe(sass())
       .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/style.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(['clean', 'tachyons-sass', 'sass', 'tachyons', 'watch']));