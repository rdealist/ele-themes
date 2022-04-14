const fs = require("fs");
const gulp = require("gulp");
const task = require("./lib/task");

const compiler = (namespaced) => {
  task.build(namespaced);
  task.fonts(namespaced);
};

gulp.task("run", async () => {
  await fs.readdir("src/themes", (err, files) => {
    if (err) {
      console.error(err);
    }
    files.forEach((file) => {
      compiler(file);
    });
  });
});
