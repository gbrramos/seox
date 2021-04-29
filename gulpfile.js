var gulp           = require('gulp'),
    gutil          = require('gulp-util'),
    prefix         = require('gulp-autoprefixer'),
    sass           = require('gulp-sass'),
    browserSync    = require('browser-sync'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglify'),
    cleanCSS       = require('gulp-clean-css'),
    rename         = require('gulp-rename'),
		del            = require('del'),
    sourcemaps     = require('gulp-sourcemaps'),
    imagemin       = require('gulp-imagemin'),
    cache          = require('gulp-cache'),
    notify         = require('gulp-notify'),
    postcss        = require('gulp-postcss'),
    parentSelector = require('postcss-parent-selector'),
    devip          = require('dev-ip');

    config = {
      npmDir:  './node_modules',
      assetsDir: './app',
      minDir: './dist',
      vendors: './vendors',
      imgDir: './img'
    };

var nameProject = 'seox';
// Static Server + watching html/css files

gulp.task('watch', ['sass', 'scripts', 'browser-sync'], function() {
  gulp.watch(config.assetsDir + '/**/*.scss', ['sass']);
	gulp.watch([config.assetsDir + '/js/*.js', 
  config.minDir + '/js/'+nameProject+'.js'], ['scripts']);
	gulp.watch('./**/*.html', browserSync.reload);
});


// Minify JS
gulp.task('scripts', () => {
  return gulp.src([
    config.npmDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
    config.npmDir + '/jquery-mask-plugin/dist/jquery.mask.min.js',
    config.npmDir + '/slick-carousel/slick/slick.min.js',
  
    config.assetsDir + '/js/*.js'
  ])

  .pipe(concat(nameProject+'.js'))
  .pipe(uglify())
  .pipe(gulp.dest(config.minDir + '/js'));
});

// Compile and minify SASS
gulp.task('sass', () => {
/*  var processors = [
        parentSelector({selector: '#painel'})
    ];*/
  return gulp.src([config.assetsDir + '/scss/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      processImport: true
    }))
    .pipe(prefix(['last 10 versions', '> 1%', 'ie 8'], { cascade: true }))
   // .pipe(postcss(processors))
    .pipe(cleanCSS({specialComments: 0}))
    .pipe(sourcemaps.write('./', {
      includeContent: false
    }))
    .pipe(gulp.dest(config.minDir + '/css'))
    .pipe(gulp.dest('../backend/public/dist/css'))
    .pipe(browserSync.stream({match: '/**/*.css'}));
});

// Compile and minify SASS
gulp.task('sass_painel', () => {
  var processors = [
        parentSelector({selector: '#painel'})
    ];
  return gulp.src([config.assetsDir + '/scss/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      processImport: true
    }))
    .pipe(prefix(['last 10 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(postcss(processors))
    .pipe(cleanCSS({specialComments: 0}))
    .pipe(sourcemaps.write('./', {
      includeContent: false
    }))
    .pipe(gulp.dest('../Back-End/public/vendor/adminlte/css/painel_client'))
    .pipe(browserSync.stream({match: '/**/*.css'}));
});
gulp.task('imgmin', function() {
	return gulp.src(config.imgDir + '/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest(config.minDir + '/img'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	});
});

// Compiles all tasks
gulp.task('default', ['watch']);

devip();



