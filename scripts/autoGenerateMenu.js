const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '../src');
const parentDirs = fs.readdirSync(rootDir);

const startFlag = '# 目录\n';
const endFlag = '---';

class Menu {
  constructor(parentDirs) {
    this.parentDirs = parentDirs;
    this.fileList = [];
  }

  getFileList() {
    this.parentDirs.forEach(parentDir => {
      const currentDir = path.resolve(rootDir, parentDir);
      let stat = fs.statSync(currentDir);
      if (stat.isDirectory()) {
        let list = fs.readdirSync(currentDir);
        list.forEach(file => {
          let filePath = path.resolve(currentDir, file);
          let _stat = fs.statSync(filePath);
          if (!_stat.isDirectory()) {
            this.fileList.push(filePath);
          }
        });
      }
    });
  }

  getMenuObj () {
    return this.fileList.reduce((prev, curr) => {
      let sepList = curr.split(path.sep);
      let menuName = sepList[sepList.length - 2];
      let fileName = sepList[sepList.length - 1];

      if (prev[menuName]) {
        prev[menuName].push(fileName);
      } else {
        prev[menuName] = [fileName];
      }
      return prev;
    }, {});
  }

  generateMenu (menuObj) {
    const keys = Object.keys(menuObj);
    let menuStr = keys.reduce((prev, curr) => {
      let fileList = menuObj[curr];
      prev += `## ${curr}\n`;
      fileList.forEach(file =>{
        const [name,] = file.split('.');
        prev += `+ [${name}](./src/${curr}/${file})\n`;
      });
      return prev + '\n';
    }, '');
      return startFlag + menuStr + endFlag;
  }

}

const menu = new Menu(parentDirs);
menu.getFileList();
let menuObj = menu.getMenuObj();
let menuStr = menu.generateMenu(menuObj);
console.log(menuStr);