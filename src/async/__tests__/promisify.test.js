import promisify from '../promisify';

import path from 'path';
import fs from 'fs';

describe('test promisify', () => {

  test('01 promise 化 fs 的方法', () => {
    const readFile = promisify(fs.readFile);
    const p = path.resolve(__dirname, '../promisify.js');

    return readFile(p, 'utf-8').then(res => {
      expect(res).toBeTruthy();
    }).catch(err => {
      expect(err).toBe(null);
    });
  });

  test('02 promise 化 reject', () => {
    const readFile = promisify(fs.readFile);
    const p = path.resolve(__dirname, '../promisify.js1');

    return readFile(p, 'utf-8').catch(err => {
      expect(err.errno).toEqual(-4058);
    });
  });

});