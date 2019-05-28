const gulp = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

function styles() {
	return gulp.src("./css/**/*.css")
				.pipe(concat('all.css'))
				.pipe(autoprefixer({
		            browsers: ['>0.1%'],
		            cascade: false
		        }))
				.pipe(gulp.dest('./dist/css'));
}
const jsFiles = [
'./js/calculator.js',
'./js/vue.min.js'
];
function scripts() {
	return gulp.src(jsFiles)
				.pipe(concat('all.js'))
				.pipe(uglify({toplevel:true}))
				.pipe(gulp.dest('./dist/js'));
}
// Создаем простой таск
gulp.task('styles', styles);
gulp.task('scripts', scripts);
