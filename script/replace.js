const data = require("./data");
const fs = require("fs-extra");
const path = require("path");

const rnPath = path.join(process.cwd(), 'react-native');
const webPath = path.join(process.cwd(), 'web');
const cdnPath = path.join(process.cwd(), 'cdn');
const webCdnPath = path.join(process.cwd(), 'web/cdn');

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
        htmlStr = htmlStr.replace(new RegExp(htmlArr[0], 'g'), htmlArr[1] || '');
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
    await fs.ensureDir(webPath);
    await fs.emptyDir(webPath);
    await fs.copy(rnPath, webPath, {
      filter: (src) => !newFunction().test(src)
    });
    await fs.copy(cdnPath, webCdnPath);
    await format(webPath);
  } catch (error) {
    console.log('error:', error);
  }
})();

function newFunction() {
  return /\/react\-native\/docs\/(0.5|0.6|0.7|0.8|0.9|0.10|0.11|0.12|0.13|0.14|0.15|0.16|0.17|0.18|0.19|0.20|0.21|0.22|0.23|0.24|0.25|0.26|0.27|0.28|0.29|0.30|0.31|0.32|0.33|0.34|0.35|0.36|0.37|0.38|0.39|0.40|0.41|0.42|0.43|0.44|0.45|0.46|0.47|0.48|0.49|0.50|0.51|0.52|0.53|0.54|0.55|0.56|0.57|0.58|0.59)(?=(\/|$))/;
}
