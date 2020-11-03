module.exports = [
  {
    // 入口JS 文件
    entry: 'src/entry/relation.ts',
    // 生成的访问路径
    outPath: '/graph.html',
    //
    template: 'public/sample.html',
  },
  {
    // 入口JS 文件
    entry: 'src/entry/anti-fraud-graph/index.ts',
    // 生成的访问路径
    outPath: '/anti-fraud-graph.html',
    //
    template: 'public/sample.html',
  },
  {
    // 入口JS 文件
    entry: 'src/entry/login.ts',
    // 生成的访问路径
    outPath: '/user/login.html',
    template: 'public/login.html',
  },
  {
    // 入口JS 文件
    entry: 'src/entry/batchSurvey.ts',
    // 生成的访问路径
    outPath: '/batchSurvey.html',
    template: 'public/sample.html',
  },
  {
    entry: 'src/entry/meta.ts',
    // 生成的访问路径
    outPath: '/_meta.html',
  },
];
