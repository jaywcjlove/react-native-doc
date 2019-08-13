React Native Doc
===

这里是本地离线预览 React Native 文档的方法，解决因官网 CDN 资源导致无法打开官方文档网站。

## 下载工程

```bash
git clone https://github.com/jaywcjlove/react-native-doc.git --depth=1 --recurse-submodules
```

## 安装依赖

```bash
npm install
```

## 启动服务

```
npm run start
```

## 注意

虽然本地预览静态服务，但仍有很多链接是走 `CDN`，通过运行脚本来替换