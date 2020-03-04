const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct(target, argList) {
      if (!this.instance) {
        this.instance = new target(...argList);
      }
      return this.instance;
    }
  });
};

export default singletonify;
