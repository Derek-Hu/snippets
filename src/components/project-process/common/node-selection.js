const defaultColor = '#666';

export function setKeyShapeSelectedState(name, value, item) {
  if (name !== 'selected') {
    return;
  }
  const shape = item.get('keyShape');

  if (!shape) {
    return;
  }

  const { style, stateStyles } = this.options;

  const stateStyle = stateStyles[name];

  if (!stateStyle) {
    return;
  }

  if (value) {
    shape.attr({
      ...style,
      ...stateStyle,
    });
  } else {
    shape.attr(style);
  }
}

export const DefaultStateOptions = {
  style: {
    stroke: defaultColor,
    shadowColor: null,
    shadowBlur: 0,
  },
  stateStyles: {
    // ... 见上方例子
    selected: {
      stroke: '#000',
      shadowColor: defaultColor,
      shadowBlur: 3,
    },
  },
};
