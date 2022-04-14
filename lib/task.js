const path = require("path");
const fs = require("fs");
const gulp = require("gulp");
const ora = require("ora");
const nop = require("gulp-nop");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const cssminimize = false;
/**
 *
 * @param {*} namespaced
 * @returns
 */
exports.fonts = (namespaced) => {
  const spin = ora("build theme font").start();
  const stream = gulp
    .src(path.resolve("src", `./fonts/**`))
    .pipe(cssminimize ? cssmin({ showLog: false }) : nop())
    .pipe(gulp.dest(path.resolve("dist", `./${namespaced}/fonts/`)))
    .on("end", () => {
      spin.succeed();
    });

  return stream;
};

exports.build = (namespaced) => {
  const spin = ora("build element theme").start();
  let stream;
  let cssFiles = "*";

  stream = gulp
    .src([
      path.resolve("src", "./themes/" + namespaced + "/" + cssFiles + ".scss"),
    ])
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ["ie > 9", "last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cssminimize ? cssmin({ showLog: false }) : nop())
    .pipe(gulp.dest(`dist/${namespaced}/`))
    .on("end", () => {
      spin.succeed();
    });
  return stream;
};
