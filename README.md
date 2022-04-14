### element-ui 主题工具

- 提供自定义 element-ui 主题定制功能。
- 所有功能需求均来自公司业务需要，与公司技术工具选择和架构有关，不具备通用性。

### 修改&使用方法

- 通过对 element-ui 样式主题 scss 源文件的改写，以满足公司项目的 UI 设计。使用 gulp 编译成拥有命名空间的 css 样式文件。
- 通过 npm 安装后，引用 themes 文件夹内的 index.css,该文件夹内的样式文件包含命名空间，与文件夹同名

### 功能

- 在 src 目录下修改 themes 文件夹中 scss 组件样式变量和代码
- 在 fonts 文件夹中添加图标字体
- 使用 build 脚本编译成 css
