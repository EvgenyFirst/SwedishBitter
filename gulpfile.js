const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require("gulp-uglify");
const connectPHP = require("gulp-connect-php")

// CssMin
const getCssMin = () => {
    return src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(concat('../css/style.min.css'))
        .pipe(dest('src'))
}

exports.getCssMin = getCssMin

// IndexHtmlMin
const getIndexHtmlMin = () => {
    return src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(concat('../index.html'))
        .pipe(dest('src'))
}

exports.getIndexHtmlMin = getIndexHtmlMin;

// ScriptReviewsSliderMin
const getScriptReviewsSliderMin = () => {
    return src('src/js/reviews-slider.js')
        .pipe(uglify())
        .pipe(concat('../js/reviews-slider.min.js'))
        .pipe(dest('js'))
}
exports.getScriptReviewsSliderMin = getScriptReviewsSliderMin;

// CopyImgCss
const copyImgCss = () => {
    return src([
        'src/img/**/**/*.*',
        'src/css/normalize.css'
    ], {
        base: "src"
    })
        .pipe(dest('./'))
}
exports.copyImgCss = copyImgCss;

// CopyPhp
const copyPhp = () => {
    return src([
        'src/mail.php'
    ], {
        base: "src"
    })
        .pipe(dest('./'))
}
exports.copyPhp = copyPhp;


// Server
const runServer = (connectPHP) => {
    sync.init({
        server: {
            baseDir: "./"
        },
        notify: false,
    });

    connectPHP();

    watch('src/index.html', series(getIndexHtmlMin)).on('change', sync.reload)
    watch('src/scss/**/*.scss', series(getCssMin)).on('change', sync.reload)
    watch('src/img/**/*.*', series(copyImgCss)).on('change', sync.reload)
    watch('src/mail.php', series(copyPhp)).on('change', sync.reload)
    watch('src/js/**/*.js', series(getScriptReviewsSliderMin)).on('change', sync.reload)
}

exports.runServer = runServer;

// Build
exports.start =
    series(
        getIndexHtmlMin,
        getCssMin,
        copyImgCss,
        copyPhp,
        getScriptReviewsSliderMin,
        runServer
    )
