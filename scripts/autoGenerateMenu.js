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
      const stat = fs.statSync(currentDir);
      if (stat.isDirectory()) {
        const list = fs.readdirSync(currentDir);
        list.forEach(file => {
          const filePath = path.resolve(currentDir, file);
          const _stat = fs.statSync(filePath);
          if (!_stat.isDirectory()) {
            this.fileList.push(filePath);
          }
        });
      }
    });
  }

  getMenuObj () {
    return this.fileList.reduce((prev, curr) => {
      const sepList = curr.split(path.sep);
      const menuName = sepList[sepList.length - 2];
      const fileName = sepList[sepList.length - 1];

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
    const menuStr = keys.reduce((prev, curr) => {
      const fileList = menuObj[curr];
      prev += `## ${curr}\n`;
      fileList.forEach(file => {
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
const menuObj = menu.getMenuObj();
const menuStr = menu.generateMenu(menuObj);
console.log(menuStr);
