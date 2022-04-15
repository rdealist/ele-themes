# element-ui 主题工具

提供自定义 element-ui 主题定制功能。

所有功能需求均来自公司业务需要，与公司技术工具选择和架构有关，不具备通用性。

### 使用方法

- 通过对 element-ui 样式主题 scss 源文件的改写，以满足公司项目的 UI 设计。使用 gulp 编译成拥有命名空间的 css 样式文件。
- 通过 npm 安装后，引用 themes 文件夹对应主题内的 index.css,该文件夹内的样式文件包含命名空间，与文件夹同名

### 功能

- 在 src 目录下修改 themes 文件夹中 scss 组件样式变量和代码
- 在 fonts 文件夹中添加图标字体
- 使用 build 脚本编译成 css

### 开发方法

1. 本地链接到使用 element-ui 组件库的项目，使用 npm link 或者 yalc。（推荐 yalc，后续步骤以 yalc 为例。）
2. 命令行输入 pnpm install yalc -g。
3. 到本项目根目录下，使用 yalc publish 发布。
4. 在应用 element-ui 组件库的项目根目录下，使用 yalc add ele-themes 建立连接。
5. 使用 ele-themes 中的文件替换 element-ui 的样式引入。
6. 引入 scss 源码进行开发调试时，需要给该项目添加 sass-loader。
7. 在本项目中修改了代码后，使用 yalc push 即可将更新推送到开发项目中。

### 字体图标

1. 若有需要引入的字体图标，将字体文件放在 src/fonts 文件夹内即可。
2. 注意字体图标的命名不要冲突。
3. 打包后，按照 element-ui 的图标引用方式即可引用。
