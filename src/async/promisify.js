const promisify = (func) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if(err){
          return reject(err);
        }
        return resolve(result);
      });
    });
  };
};

export default promisify;
