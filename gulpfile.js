const gulp = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require('gulp-autoprefixer');

function styles() {
	return gulp.src("./css/**/*.css")
				.pipe(concat('all.css'))
				.pipe(autoprefixer({
		            browsers: ['>0.1%'],
		            cascade: false
		        }))
				.pipe(gulp.dest('./dist/css'));
}

function scripts() {
	return gulp.src("./js/**/*.js")
				.pipe(concat('all.js'))
				.pipe(gulp.dest('./dist/js'));
}
// Создаем простой таск
gulp.task('styles', styles);
gulp.task('scripts', scripts);
