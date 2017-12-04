const gulp = require('gulp');
const minify = require('gulp-minify-css');//压缩css
const uglify = require('gulp-uglify');//压缩js
const webserver = require('gulp-webserver');
const html = require('htmlmin');

gulp.task('minify',function(){
    gulp.src('./css/*.css')
        .pipe(minify())
        .pipe(gulp.dest("public"))
})

gulp.task('uglify',function(){
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("public"))
})
gulp.task("webserver",function(){
    gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            livereload: true,
            open:true,
            fallback:"index.html"
        }))
})
gulp.task('default',["minify","uglify","webserver"]);
