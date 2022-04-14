const path = require("path");
const fs = require("fs");
const gulp = require("gulp");
const ora = require("ora");
const nop = require("gulp-nop");
const sass = require("gulp-sass")(require("node-sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const cleanCSS = require("gulp-clean-css");
const cssWrap = require("gulp-css-wrap");
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
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssminimize ? cssmin({ showLog: false }) : nop())
    .pipe(gulp.dest(`dist/${namespaced}/`))
    .on("end", () => {
      spin.succeed();
    });
  return stream;
};
exports.cssWrap = (namespaced) => {
  const spin = ora("set namespaced").start();
  let stream;
  stream = gulp
    .src(path.resolve(`dist/${namespaced}/index.css`))
    .pipe(cssWrap({ selector: namespaced }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`themes/${namespaced}`))
    .on("end", () => {
      spin.succeed();
    });
  return stream;
};
