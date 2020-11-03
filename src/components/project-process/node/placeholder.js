import G6 from '@antv/g6';

G6.registerNode('placeholder', {
  getAnchorPoints() {
    return [
      [1, 0.5], // 右侧中间
      [0, 0.5], // 左侧中间
      [0.5, 1], // 下方
      [0.5, 0], // 上方
    ];
  },

  draw(cfg, group) {
    var keyShape = group.addShape('circle', {
      attrs: {
        x: 0,
        y: 0,
        r: 1,
        stroke: '#fff',
        fill: '#fff',
      },
      name: 'path-shape',
      // 设置 draggable 以允许响应鼠标的图拽事件
      draggable: true,
    });

    return keyShape;
  },
});
