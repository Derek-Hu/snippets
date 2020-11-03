import G6 from '@antv/g6';
import { conditionSize, Labels } from '../settings';
import { addLabelText } from './edit';
import base from './base';

const defaultText = Labels.condition;
const defaultSize = 70;
const defaultColor = '#666';

G6.registerNode('condition', {
  ...base,

  draw(cfg, group) {
    // 如果 cfg 中定义了 style 需要同这里的属性进行融合
    const keyShape = group.addShape('path', {
      attrs: {
        path: this.getPath(cfg), // 根据配置获取路径
        stroke: cfg.color || defaultColor, // 颜色应用到描边上，如果应用到填充，则使用 fill: cfg.color
        fill: '#fff',
      },
      // must be assigned in G6 3.3 and later versions. it can be any value you want
      name: 'path-shape',
      // 设置 draggable 以允许响应鼠标的图拽事件
      draggable: true,
    });
    const text = cfg.label || defaultText;

    const { mode } = cfg;

    addLabelText(group, { text, fontSize: conditionSize, xOffset: 0 }, mode);

    return keyShape;
  },
  // 返回菱形的路径
  getPath(cfg) {
    const size = cfg.size || [defaultSize, defaultSize]; // 如果没有 size 时的默认大小
    const width = size[0];
    const height = size[1];
    //  / 1 \
    // 4     2
    //  \ 3 /
    const path = [
      ['M', 0, 0 - height / 2], // 上部顶点
      ['L', width / 2, 0], // 右侧顶点
      ['L', 0, height / 2], // 下部顶点
      ['L', -width / 2, 0], // 左侧顶点
      ['Z'], // 封闭
    ];
    return path;
  },
});
