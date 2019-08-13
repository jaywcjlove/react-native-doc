const data = require("./data");
const fs = require("fs-extra");
const path = require("path");

const rootPath = path.join(process.cwd(), 'react-native');

async function format(dir) {
  const pathArr = await fs.readdir(dir);
  pathArr.forEach(async (fileName) => {
    const pathTo = path.join(rootPath, fileName);
    const stat = await fs.stat(pathTo);
    if (stat.isFile() && /.html$/.test(fileName)) {
      let htmlStr = await fs.readFile(pathTo);
      htmlStr = htmlStr.toString();
      data.forEach((htmlArr) => {
        htmlStr = htmlStr.replace(htmlArr[0], htmlArr[1] || '');
      });
      await fs.writeFile(pathTo, htmlStr);
      console.log('-->', pathTo);
      // console.log('htmlStr:', htmlStr)
      // console.log('htmlStr:', htmlStr.toString())
      // console.log('fileName:1', pathTo, stat.isFile(), fileName);
      // console.log('fileName:2', htmlStr);
    } else if(stat.isDirectory()){

    }
  });
}

;(async () => {
  await format(rootPath);
})();