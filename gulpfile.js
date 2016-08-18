    var gulp = require('gulp');
    var useref = require('gulp-useref');
    var uglify = require('gulp-uglify');
    var react = require('gulp-react');
    var gulpif = require('gulp-if');
    var babel = require('gulp-babel');
    var path = {
        HTML: 'app/src/index.html'
        , ALL: ['app/src/js/*.js', 'app/src/js/**/*.js', 'app/src/index.html']
        , JS: ['app/src/js/*.js', 'app/src/js/**/*.js']
        , MINIFIED_OUT: 'build.min.js'
        , DEST_SRC: 'app/dist/src', //把从jsx文件转换而来的文件放这里
        DEST_BUILD: 'app/dist/build'
        , DEST: 'app/dist'
    };

    //获取app/src/build/ js的源文件,压缩,放到目标文件夹
    gulp.task('miniJs', ['replaceHTML'],function () {
        gulp.src('app/src/build/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(path.DEST_SRC))
    })

    //app/src/*.html中的js,合并压缩成一个js,替换app/src/*html中的js并且输出到app/dist
    gulp.task('replaceHTML', ['babel'],function(){
       gulp.src(path.HTML)
       .pipe(useref())
       .pipe(gulp.dest(path.DEST));
    });
    
    gulp.task('babel', function () {
        return gulp.src(path.JS)
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/src/build'));
    });

    //发布到生产环境的task
    gulp.task('build',['miniJs']);

    //把发布到生产环境之前的所有任务再提炼
    gulp.task('production', ['build']);

    //观察app/src/*.html和js文件的变化，执行以上的2个任务
    gulp.task('watch', function () {
        gulp.watch(path.ALL, ['transform', 'copy']);
    });

    //名称为default的task，需要
    gulp.task('default', ['watch', 'transform', 'copy']);
