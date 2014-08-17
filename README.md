nodeframe
======

## 项目部署

* [安装Nodejs环境][1]

* 根目录执行"npm install"，安装项目依赖

* 根目录执行"node app"启动服务


## 项目说明

* 把html文件放到views中，把css、JavaScript、image等静态资源放到public文件夹中。

* 如果在views文件夹中添加了extrabux文件夹，extrabux文件夹下有index.html，则访问路径为http://localhost:8080/extrabux/index，注意端口号在conf/config.js中配置。

* http://localhost:8080/默认访问views中的index.html，可查看应用目录列表。

* 页面包含的文件，如页头页尾，放在views中对应项目的partials文件夹中。

* 添加一个静态页面，则在views/pagetitle.js文件中对应项目的hash值中加上当前页面的url及title，方便给页面设置title，及生成预览目录

* 如有两个显示屏，可以一屏放浏览器，一屏放编辑器，编辑器编辑文件，浏览器实时预览更改后的效果。

* 本地开发时，logs和node_modules设为ignore文件夹，不提交到版本库。

* 当conf/config.js配置文件中将environment设为production时，将走生产的配置，将加载压缩后静态资源，否则将加载原始文件。

* 项目使用了sass、compass。

* 


## 目录结构
    ├─document - 项目文档
    ├─common
    ├─conf ─ 配置文件
    ├─controllers - 控制器
    ├─logs ─ 服务器日志文件
    ├─public ─ 静态资源文件
    │      ├─dist ─ 打包后的静态资源目录
    │      ├─css ─ sass生成后的css 或直接写的css
    │      ├─images ─ 背景图片文件夹
    │      ├─js
    │      │  ├─base ─ 基础js文件
    │      │  ├─appjs ─ 应用js
    │      │  └─plugin ─ 一些插件
    │      └─sass
    │          ├─page 模块sass文件
    │      ├─config.rb ─ sass、compass配置文件
    │      ├─package.json
    │      ├─Gruntfile.js 打包配置文件
    ├─routers 路由
    └─views 模版文件夹 所有的html文件放到这个目录 可分文件夹存放
    │    ├─wextrabux - wextrabux test项目html文件
    │    ├─partials 独立模块 如头尾
    │    ├─index.html ─ index模块
    │    ├─pagetitle ─ 目录配置文件
    ├─extrabux.json 航班数据
    ├─app.js 启动文件
    ├─package.json
    ├─README.md 项目说明文件




  [1]: http://nodejs.org/download/
  [2]: http://pan.baidu.com/s/1eQoZCAI