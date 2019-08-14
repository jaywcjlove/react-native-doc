const data = require("./data");
const fs = require("fs-extra");
const path = require("path");

const rootPath = path.join(process.cwd(), 'react-native');

async function format(dir) {
  const pathArr = await fs.readdir(dir);
  pathArr.forEach(async (fileName) => {
    const pathTo = path.join(dir, fileName);
    const stat = await fs.stat(pathTo);
    if (stat.isFile() && /.html$/.test(fileName)) {
      let htmlStr = await fs.readFile(pathTo);
      htmlStr = htmlStr.toString();
      let isReplace = false;
      data.forEach((htmlArr) => {
        if (htmlStr.indexOf(htmlArr[0])) {
          isReplace = true;
        }
        htmlStr = htmlStr.replace(htmlArr[0], htmlArr[1] || '');
      });
      await fs.writeFile(pathTo, htmlStr);
      console.log(`${isReplace ? '√' : ''}::>`, pathTo);
    } else if(stat.isDirectory()){
      await format(pathTo);
    }
  });
}

;(async () => {
  try {
    await format(rootPath);
  } catch (error) {
    console.log('error:', error);
  }
})();