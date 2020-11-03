import G6 from '@antv/g6';
import { fontSize, Labels } from '../settings';
import base from './base';
import { addLabelText } from './edit';

const defaultText = Labels.start;
const defaultSize = 30;
const defaultColor = '#666';

G6.registerNode('start', {
  ...base,

  draw(cfg, group) {
    const r = cfg.size || defaultSize;
    var keyShape = group.addShape('circle', {
      attrs: {
        x: 0,
        y: 0,
        r,
        stroke: cfg.stroke || defaultColor,
        cursor: 'pointer',
        fill: '#fff',
      },
      name: 'path-shape',
      // 设置 draggable 以允许响应鼠标的图拽事件
      draggable: true,
    });

    const text = cfg.label || defaultText;

    addLabelText(group, { text, fontSize, xOffset: 0 });

    return keyShape;
  },
  // 返回圆形的路径
  getPath(cfg) {
    // 如果没有 size 时的默认大小
    const r = cfg.size || defaultSize;
    const path = [
      ['M', 0 - r, 0],
      ['a', r, r, 0, 1, 0, r * 2, 0],
      ['a', r, r, 0, 1, 0, -(r * 2), 0],
    ];
    return path;
  },
});
