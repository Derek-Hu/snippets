const installModels = [];

export default new class {
  transform(model) {
    class C {}
    Object.keys(model).forEach((k) => {
      C[k] = model[k];
    });
    C.getKey = name => `${model.namespace}/${name}`;
    return C;
  }

  addModel(m) {
    installModels.push(m);
  }

  init(app) {
    installModels.forEach(m => app.model(m));
  }
}();
