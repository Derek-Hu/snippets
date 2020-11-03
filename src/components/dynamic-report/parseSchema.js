const parse = fields => {
  return fields.reduce(
    (fieldMap, item) => {
      const { parent, field, ...rest } = item;
      if (fieldMap.root === null || parent.length < fieldMap.root.length) {
        fieldMap.root = parent;
      }
      if (!fieldMap.schemas[parent]) {
        fieldMap.schemas[parent] = {};
      }
      const isEmpty = parent === '' || parent === null || parent === undefined;
      const reg = isEmpty ? '' : new RegExp('^' + parent + '.');

      fieldMap.schemas[parent][field.replace(reg, '')] = rest;
      return fieldMap;
    },
    {
      schemas: {},
      root: null,
    }
  );
};

export default (schemas, needParseTypes) => {
  if (!schemas) {
    return null;
  }
  return schemas.reduce((parsed, schema) => {
    // 只解析当前可查看的报告
    if (needParseTypes && needParseTypes.length && needParseTypes.indexOf(schema.url) === -1) {
      return parsed;
    }
    parsed[schema.url] = parse(schema.fields || []);
    return parsed;
  }, {});
};
