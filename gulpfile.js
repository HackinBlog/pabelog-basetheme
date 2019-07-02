var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('assets/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
    gulp.watch('assets/sass/style.scss', gulp.series('sass'));
});