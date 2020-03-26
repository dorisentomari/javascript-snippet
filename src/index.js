import { List } from './data-structure/List/List';

const list = new List(5);

for (let i = 1; i <= 4; i++) {
  list.append(i);
}
console.log(list.insert(5, 1));
console.log(list.insert(6));
console.log(list.traverse());
console.log(list);