const gulp = require("gulp"),
	sass = require("gulp-sass"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	cssnano = require("cssnano"),
	sourcemaps = require("gulp-sourcemaps"),
	browserSync = require("browser-sync").create()

const paths = {
	src: {
		html: './src/*.html',
		style: './src/style/**/*.scss',
		images: './src/images/**/*.png'
	},
	dist: {
		html: './dist',
		style: './dist/style',
		images: './dist/images'
	}
}

const extras = () => {
	const files = ['html'],
		filesSrc = files.map(file => paths.src[file])

	return gulp.src(filesSrc)
	.pipe(gulp.dest('./dist'))
}

const images = () => {
	return gulp.src(paths.src.images)
	.pipe(gulp.dest(paths.dist.images))
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

const reload = () => browserSync.reload()

const watch = () => {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	})

	gulp.watch(paths.src.style, style)
	gulp.watch(paths.src.html, extras)
	gulp.watch(paths.src.images, images)
	gulp.watch('./src', reload)
}

exports.default = gulp.parallel(gulp.series(extras, style, watch), images)