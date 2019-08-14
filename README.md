React Native Doc
===

这里是本地离线预览 React Native 文档的方法，解决因官网 CDN 资源导致无法打开官方文档网站。

## 下载工程

```bash
# 克隆并下载带有 submodule 的项目
git clone https://github.com/jaywcjlove/react-native-doc.git --depth=1 --recurse-submodules
```

参数 `--recurse-submodules` 会克隆太久 `react-native`。

```bash
# 克隆项目
git clone https://github.com/jaywcjlove/react-native-doc.git --depth=1
# 更新 submodule 子项目
git submodule update --depth 1 --init --recursive
```

参数 `--depth` 只有 [git@2.23.0-rc2](https://github.com/git/git/commit/275cd184d52b5b81cb89e4ec33e540fb2ae61c1f) 支持

## 安装依赖

```bash
npm install
```

## 替换 CDN 资源

通过下面命令替换 CDN 资源，运行之前确保 `react-native` 目录下载完成。

```bash
npm run replace
```

## 启动服务

```
npm run start
```

## 注意

虽然本地预览静态服务，但仍有很多链接是走 `CDN`，通过运行脚本来替换