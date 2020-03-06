import Vector from './data-structure/Vector/Vector';

const vector = new Vector<number>(20);

for (let i = 0; i < 10; i++) {
  vector.insert(i, parseInt(String(Math.random() * 10 + 1), 10));
}

vector.traverse();
vector.sort();
vector.traverse();

