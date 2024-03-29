const gulp = require("gulp"),
	sass = require("gulp-sass"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	cssnano = require("cssnano"),
	sourcemaps = require("gulp-sourcemaps"),
	browserSync = require("browser-sync").create(),
	babel = require("gulp-babel"),
	$ = require('gulp-load-plugins')()

const paths = {
	src: {
		html: './src/*.html',
		style: './src/style/**/*.scss',
		script: './src/script/**/*.js',
		images: './src/images/**/*.png',
		fonts: './src/fonts/*'
	},
	dist: {
		html: './dist',
		style: './dist/style',
		script: './dist/script',
		images: './dist/images',
		fonts: './dist/fonts'
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

const fonts = () => {
	return gulp.src(paths.src.fonts)
		.pipe(gulp.dest(paths.dist.fonts))
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

const script = () => {
	return gulp.src(paths.src.script)
	.pipe(babel())
	.pipe(gulp.dest(paths.dist.script))
}

const scriptLint = () => {
	return gulp.src([paths.src.script, '!src/script/bootstrap.min.js'])
	.pipe($.eslint({
		'configFile': '.eslintrc.js'
	}))
	.pipe($.eslint.format())
}

const reload = () => browserSync.reload()

const watch = () => {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	})

	gulp.watch(paths.src.html, extras)
	gulp.watch(paths.src.style, style)
	gulp.watch(paths.src.script, scriptLint)
	gulp.watch(paths.src.script, script)
	gulp.watch(paths.src.images, images)
	gulp.watch('./src', reload)
}

exports.default = gulp.parallel(gulp.series(extras, style, script, scriptLint, watch),images, fonts)
exports.build = gulp.parallel(gulp.series(extras, style, script, scriptLint),images, fonts)