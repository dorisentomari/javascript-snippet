const pipeAsyncFunctions = (...fns) => {
  return arg => {
    return fns.reduce((p, f) => {
      return p.then(f);
    }, Promise.resolve(arg));
  };
};

export default pipeAsyncFunctions;
