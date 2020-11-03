import G6 from '@antv/g6';
import { addEditShape, addLabelText } from './edit';
import { getRectWidth } from '../tool/getTextWidth';
import { fontSize, Labels } from '../settings';
import base from './base';

const defaultText = Labels.approve;
const defaultHeight = 50;
const defaultColor = '#666';

G6.registerNode('approve', {
  ...base,

  draw(cfg, group) {
    const { mode, label, color } = cfg;

    // 如果 cfg 中定义了 style 需要同这里的属性进行融合
    const text = label || defaultText;
    const totalWidth = parseInt(getRectWidth(text, fontSize, mode));

    const keyShape = group.addShape('path', {
      attrs: {
        path: this.getPath(cfg, totalWidth), // 根据配置获取路径
        stroke: color || defaultColor, // 颜色应用到描边上，如果应用到填充，则使用 fill: cfg.color,
        fill: '#fff',
      },
      // must be assigned in G6 3.3 and later versions. it can be any value you want
      name: 'path-shape',
      // 设置 draggable 以允许响应鼠标的图拽事件
      draggable: true,
    });

    addLabelText(group, { text, fontSize }, mode);
    addEditShape(group, { totalWidth, fontSize }, mode);

    return keyShape;
  },
  getPath(cfg, totalWidth) {
    const size = cfg.size || [totalWidth, defaultHeight]; // 如果没有 size 时的默认大小
    const width = size[0];
    const height = size[1];
    const path = [
      ['M', -width / 2, -height / 2], // 上部顶点
      ['L', -width / 2, height / 2], // 右侧顶点
      ['L', width / 2, height / 2], // 下部顶点
      ['L', width / 2, -height / 2], // 左侧顶点
      ['Z'], // 封闭
    ];
    return path;
  },
});
