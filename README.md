React Native Doc
===

![Build and Deploy react-native-doc](https://github.com/jaywcjlove/react-native-doc/workflows/Build%20and%20Deploy%20react-native-doc/badge.svg) [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/react-native?label=@wcjiang/react-native)](https://hub.docker.com/r/wcjiang/react-native) [![Docker Stars](https://img.shields.io/docker/stars/wcjiang/react-native)](https://hub.docker.com/r/wcjiang/react-native) 

这里是本地离线预览 [React Native](https://github.com/facebook/react-native/) 官方文档的方法，解决因官网 CDN 资源导致无法打开官方文档网站，已经将处理好的 HTML 存放在 [gh-pages](https://github.com/jaywcjlove/react-native-doc/tree/gh-pages) 分支，只需克隆配合 [sgo](https://github.com/jaywcjlove/sgo) 工具预览即可。

## Docker 部署

> Port: `60005` - [react-native-doc](https://facebook.github.io/react-native/)

```shell
docker pull wcjiang/react-native:latest
```

Run Server

```shell
docker run --name react-native -p 60005:60005 --restart=always -d wcjiang/react-native:latest
```

## 下载工程

```bash
# 克隆并下载带有 submodule 的项目
git clone https://github.com/jaywcjlove/react-native-doc.git --depth=1 --recurse-submodules
```

参数 `--recurse-submodules` 会克隆太久 `react-native`。

```bash
# 克隆项目
git clone https://github.com/jaywcjlove/react-native-doc.git --depth=1
# 初始化 submodule 子项目
git submodule update --depth 1 --init --recursive
# 更新 submodule 子项目
git submodule update --recursive --remote
```

参数 `--depth` 只有 [git@2.23.0-rc2](https://github.com/git/git/commit/275cd184d52b5b81cb89e4ec33e540fb2ae61c1f) 支持

## 安装依赖

```bash
npm install
```

## 替换 CDN 资源

通过下面命令批量替换 CDN 资源，运行之前确保 `react-native` 目录下载完成，使用编辑器替换，内容太多会让编辑器卡死。替换内容在这里 [`script/data.js`](script/data.js)

```bash
npm run start
```

更新 React Native 主文档仓库

```bash
# 进入 React Native 仓库
cd react-native/
# 放弃本地修改内容
git reset --hard
cd ../
# 更新 submodule 子项目
git submodule update --recursive --remote
```

## 启动服务

```
npm run server
```

## 注意

虽然本地预览静态服务，但仍有很多链接是走 `CDN`，通过运行脚本来替换

## Links

- [@jaywcjlove/docs](https://github.com/jaywcjlove/docs)
- [@jaywcjlove/react-native-doc](https://github.com/jaywcjlove/react-native-doc)
- [Docker Repository.](https://hub.docker.com/r/wcjiang/react-native)