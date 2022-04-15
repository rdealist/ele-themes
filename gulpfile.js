const fs = require("fs");
const gulp = require("gulp");
const task = require("./lib/task");

gulp.task("run", async () => {
  await fs.readdir("src/themes", (err, files) => {
    if (err) {
      console.error(err);
    }
    files.forEach((file) => {
      task.build(file);
      task.fonts(file);
    });
  });
});

gulp.task("css-wrap", async () => {
  await fs.readdir("dist", (err, files) => {
    if (err) {
      console.error(err);
    }
    files.forEach((file) => {
      task.cssWrap(file);
    });
  });
});
