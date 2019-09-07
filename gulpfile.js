const gulp = require("gulp"),
	sass = require("gulp-sass"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	cssnano = require("cssnano"),
	sourcemaps = require("gulp-sourcemaps"),
	helper = require("gulp-sass-helper"),
	browserSync = require("browser-sync").create()

const paths = {
	src: {
		html: './src/*.html',
		style: './src/style/*.scss'
	},
	dist: {
		html: './dist',
		style: './dist/style'
	}
}

const extras = () => {
	const files = ['html'],
		filesSrc = files.map(file => paths.src[file])

	return gulp.src(filesSrc)
	.pipe(gulp.dest('./dist'))
}

const style = () => {
	return gulp.src(paths.src.style)
	.pipe(sourcemaps.init())
	.pipe(sass())
	.on('error', sass.logError)
	.pipe(postcss([autoprefixer(), cssnano()]))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(paths.dist.style))
	.pipe(browserSync.stream())
}

const runSassLint = done => {
	helper.sassLint({sass: {src: paths.src.style, dest: paths.dist.style}}, true)
	done();
};

const reload = () => browserSync.reload()

const watch = () => {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	})

	gulp.watch(paths.src.style, style)
	gulp.watch(paths.src.html, reload)
}

const buildStyle = gulp.series(runSassLint, style)

exports.reload = gulp.series(extras, reload)
exports.default = gulp.series(extras, buildStyle, watch)