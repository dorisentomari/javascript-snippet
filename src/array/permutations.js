import { isArray } from '../common/checkDataType';

const permutations = (arr = []) => {

  if (!isArray(arr)){
    return [];
  }

  if (arr.length === 1) {
    return arr;
  } else if (arr.length ===2){
    return [
      arr,
      [arr[1], arr[0]]
    ];
  } else {
    return arr.reduce((prev, curr, index) => {
      return prev.concat(
        permutations(
          [
            ...arr.slice(0, index),
            ...arr.slice(index + 1)
          ]
        ).map(value => [curr, ...value])
      );
    }, []);
  }
};

export default permutations;
