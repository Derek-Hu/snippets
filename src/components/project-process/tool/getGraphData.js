import { scaleSize } from '../settings';

const getEdgeControlPoints = edge => {
  const { _cfg } = edge;
  const { keyShape } = _cfg;
  const { attrs } = keyShape;
  const { path } = attrs;

  const eModel = edge.getModel();
  const startPoint = {
    x: eModel.startPoint.x,
    y: eModel.startPoint.y,
  };
  const endPoint = {
    x: eModel.endPoint.x,
    y: eModel.endPoint.y,
  };

  const controlPoints = [startPoint];
  path
    // .filter(p => p[0] === 'Q')
    .forEach((p, index) => {
      if (p[0] !== 'Q') {
        return;
      }

      const from = {
        x: path[index - 1][1],
        y: path[index - 1][2],
      };
      const to = {
        x: path[index + 1][1],
        y: path[index + 1][2],
      };
      const furthe = {
        x: path[index + 2][1],
        y: path[index + 2][2],
      };
      const lessX = from.x < to.x;
      const lessY = from.y < to.y;
      const isVertical = furthe.y !== to.y;

      const minX = Math.min(from.x, to.x);
      const maxX = Math.max(from.x, to.x);
      const minY = Math.min(from.y, to.y);
      const maxY = Math.max(from.y, to.y);
      // 从左上到右下
      let point = {};
      if (lessX && lessY) {
        if (isVertical) {
          // 顺时针
          point = {
            x: maxX,
            y: minY,
          };
        } else {
          // 逆时针
          point = {
            x: minX,
            y: maxY,
          };
        }
      }

      // 从右下到左上
      if (!lessX && !lessY) {
        if (isVertical) {
          // 顺时针
          point = {
            x: minX,
            y: maxY,
          };
        } else {
          // 逆时针
          point = {
            x: maxX,
            y: minY,
          };
        }
      }

      // 从左下到右上
      if (lessX && !lessY) {
        if (isVertical) {
          // 逆时针
          point = {
            x: maxX,
            y: maxY,
          };
        } else {
          // 顺时针
          point = {
            x: minX,
            y: minY,
          };
        }
      }
      // 从右上到左下
      if (!lessX && lessY) {
        if (isVertical) {
          // 逆时针
          point = {
            x: minX,
            y: minY,
          };
        } else {
          // 顺时针
          point = {
            x: maxX,
            y: maxY,
          };
        }
      }
      controlPoints.push({
        x: point.x * scaleSize,
        y: point.y * scaleSize,
      });
    });
  controlPoints.push({
    x: endPoint.x * scaleSize,
    y: endPoint.y * scaleSize,
  });
  return controlPoints;
};

const getElementPos = ({ centerX, centerY, width, height }) => {
  return {
    upperLeft: {
      x: (centerX - width / 2) * scaleSize,
      y: (centerY - height / 2) * scaleSize,
    },
    lowerRight: {
      x: (centerX + width / 2) * scaleSize,
      y: (centerY + height / 2) * scaleSize,
    },
  };
};
export default graph => {
  const edges = graph.getEdges();

  const data = graph.save();
  console.log(data);
  graph.getNodes().map((node, index) => {
    const positions = getElementPos(node.getBBox());
    data.nodes[index].upperLeft = positions.upperLeft;
    data.nodes[index].lowerRight = positions.lowerRight;
  });
  data.edges = edges.map(e => {
    const eModel = e.getModel();
    eModel._controlPoints = getEdgeControlPoints(e);
    return eModel;
  });

  return data;
};
