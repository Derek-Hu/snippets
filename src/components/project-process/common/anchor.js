import { ItemState, AnchorPointState } from '../behavior/constant';

const ANCHOR_POINT_NAME = 'anchorPoint';

const getAnchorPointDefaultStyle = (item, anchorPoint) => {
  const { width, height } = item.getKeyShape().getBBox();

  const [x, y] = anchorPoint;

  return {
    x: width * x - width / 2,
    y: height * y - height / 2,
    r: 5,
    lineWidth: 2,
    fill: '#FFFFFF',
    stroke: '#2acd8f',
  };
};

const getAnchorPointDefaultDisabledStyle = (item, anchorPoint) => {
  const { width, height } = item.getKeyShape().getBBox();

  const [x, y] = anchorPoint;

  return {
    img:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xLjUxNSAxLjE3Mmw1LjY1NyA1LjY1Nm0wLTUuNjU2TDEuNTE1IDYuODI4IiBzdHJva2U9IiNGRjYwNjAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+',
    x: width * x - 4,
    y: height * y - 8,
    width: 8,
    height: 8,
  };
};

function drawAnchorPoints(
  // self,
  item,
  getAnchorPointStyle,
  getAnchorPointDisabledStyle
) {
  const group = item.getContainer();
  const model = item.getModel();
  const anchorPoints = this.getAnchorPoints ? this.getAnchorPoints(model) : [];
  const anchorPointsState = item.get('anchorPointsState') || [];

  anchorPoints.forEach((anchorPoint, index) => {
    if (anchorPointsState[index] === AnchorPointState.Enabled) {
      group.addShape('circle', {
        name: ANCHOR_POINT_NAME,
        attrs: {
          ...getAnchorPointDefaultStyle(item, anchorPoint),
          ...getAnchorPointStyle(item, anchorPoint),
        },
        isAnchorPoint: true,
        anchorPointIndex: index,
        anchorPointState: AnchorPointState.Enabled,
      });
    } else {
      group.addShape('image', {
        name: ANCHOR_POINT_NAME,
        attrs: {
          ...getAnchorPointDefaultDisabledStyle(item, anchorPoint),
          ...getAnchorPointDisabledStyle(item, anchorPoint),
        },
        isAnchorPoint: true,
        anchorPointIndex: index,
        anchorPointState: AnchorPointState.Disabled,
      });
    }
  });
}

function removeAnchorPoints(item) {
  const group = item.getContainer();
  const anchorPoints = group.findAllByName(ANCHOR_POINT_NAME);

  anchorPoints.forEach(anchorPoint => {
    group.removeChild(anchorPoint);
  });
}

function setAnchorPointsState(
  // self,
  name,
  value,
  item,
  getAnchorPointStyle = () => ({}),
  getAnchorPointDisabledStyle = () => ({})
) {
  if (name !== ItemState.ActiveAnchorPoints) {
    return;
  }

  if (value) {
    drawAnchorPoints.call(this, item, getAnchorPointStyle, getAnchorPointDisabledStyle);
  } else {
    removeAnchorPoints.call(this, item);
  }
}

export { setAnchorPointsState };
