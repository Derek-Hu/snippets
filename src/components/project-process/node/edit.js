export const name = 'edit-shape';

export const addEditShape = (group, { totalWidth, fontSize }, mode) => {
  if (mode === 'image' || mode === 'view') {
    return null;
  }
  return group.addShape('text', {
    // attrs: style
    attrs: {
      x: totalWidth / 2 - 25, // 居中
      y: 0,
      fontSize,
      fontFamily: 'iconfont',
      textAlign: 'center',
      textBaseline: 'middle',
      text: '\ue67b',
      fill: '#666',
    },
    // must be assigned in G6 3.3 and later versions. it can be any value you want
    name,
    // 设置 draggable 以允许响应鼠标的图拽事件
    draggable: true,
  });
};

export const addLabelText = (group, { text, fontSize, xOffset }, mode) => {
  if (xOffset === null || xOffset === undefined) {
    xOffset = mode === 'image' || mode === 'view' ? 0 : -10;
  }
  return group.addShape('text', {
    // attrs: style
    attrs: {
      x: xOffset, // 居中
      y: 0,
      fontSize,
      textAlign: 'center',
      textBaseline: 'middle',
      text,
      fill: '#666',
    },
    // must be assigned in G6 3.3 and later versions. it can be any value you want
    name: 'text-shape',
    // 设置 draggable 以允许响应鼠标的图拽事件
    draggable: true,
  });
};
