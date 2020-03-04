import JSONtoCSV from './csv/JSONtoCSV';
import CSVtoJSON from './csv/CSVtoJSON';

let json = [
  {
    name: 'jack',
    age: '18',
    home: 'shanghai'
  },
  {
    name: 'mark',
    age: '19',
    home: 'beijing'
  }
];

let csv = 'name,age,home\njack,18,shanghai\nmark,19,beijing';

console.log(JSONtoCSV(json));
console.log(CSVtoJSON(csv));
