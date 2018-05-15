# 博客系统---运行环境
1. Node 10.1.0
2. JDK 1.8.0_172
3. Maven 3.5.3

# 博客系统（前端技术栈）

## React

用React做前端的View层。

React特色：
1. UI = f(data)
2. 一切都是组件
3. 声明式编程 （Declarative Programming)

React生命周期：
![1814354-4bf62e54553a32b7](https://user-images.githubusercontent.com/33799549/39359157-62a298e2-4a4b-11e8-996f-346d1a5d204a.png)

## Redux

用Redux做前端的Model层，负责管理数据以及绑定数据到React。

React + Redux生命周期:

![React + Redux Cycle](https://upload-images.jianshu.io/upload_images/1632709-6d14bdaa2fc8b34b.png)

推荐阅读：

* [看漫画，学 Redux](https://github.com/jasonslyvia/a-cartoon-intro-to-redux-cn)

## Redux-saga

Redux-saga的作者是这样形容它的的：
> It is a Redux middleware for handling side effects. —— Yassine Elouafi  

Redux-saga是Redux中间件，是在Redex reducer的增强，用来处理一些副作用，比如异步读取服务器数据。

推荐阅读：

* [聊一聊 redux 异步流之 redux-saga](https://www.jianshu.com/p/e84493c7af35)

## webpack

webpack 的官方对它是这样定义的：
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

可以这样理解：

webpack提供前端模块化方案，与grunt/gulp 强调前端开发工作流程不同，webpack侧重模块化。webpack可以把开发中的所有资源（js文件、css文件、图片等等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合前端生产环境部署的前端资源。

推荐阅读：

* [webpack 3 零基础入门教程](https://love2.io/@hfpp2012/doc/webpack-tutorial/README.md)

## ES6 && babel

运用JavaScript ES6语法编写程序，并用babel转译。

## Ant Design

Ant Design是蚂蚁金服出品的一款前端UI library，提供了一套非常完整的组件化设计规范与组件化编码规范，大幅提高了部分产品的设计研发效率及质量。

# 博客系统（后端技术栈）

## Spring boot

## Spring security

## Elastic Search

## Java

## Mysql

## MongoDb

## Docker

Docker给自己的定义是

> Docker is an open platform for developers and sysadmins of distributed applications.

可以这样理解：

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上。简单的说，就是“一次构建，到处运行（Build once，run anywhere）”


# 博客系统---模块
## 模块:

* 首页展示
* 用户、角色、权限管理
* 博客正文展示
* 博客录入
* 博客分类展示
* 博客标签展示
* 评论管理
* 点赞管理
* ES搜索
