import G6 from '@antv/g6';

export const EDGE_LABEL_CLASS_NAME = 'edge-label';

export const ArrowPath = 'M 0,0 L 10,5 L 10,-5 Z';

export const Color = {
  Approve: '#2acd8f',
  Reject: 'red',
  Normal: '#999',
};
const EDGE_LABEL_WRAPPER_CLASS_NAME = 'edge-label-wrapper-label';

const bizFlowEdge = ({ normal: { fill, stroke, arrowFill }, selected: { shadowColor, shadowBlur } }) => ({
  options: {
    style: {
      stroke,
      lineWidth: 2,
      lineAppendWidth: 4,
      shadowColor: null,
      shadowBlur: 0,
      radius: 12,
      offset: 24,
      endArrow: {
        path: ArrowPath,
        fill: arrowFill,
      },
    },
    labelCfg: {
      style: {
        fill,
        fontFamily: 'iconfont',
        fontSize: 15,
      },
    },
    stateStyles: {
      selected: {
        stroke: shadowColor,
        shadowColor,
        shadowBlur,
      },
    },
  },

  createLabelWrapper(group) {
    const label = group.findByClassName(EDGE_LABEL_CLASS_NAME);
    const labelWrapper = group.findByClassName(EDGE_LABEL_WRAPPER_CLASS_NAME);

    if (!label) {
      return;
    }

    if (labelWrapper) {
      return;
    }

    group.addShape('rect', {
      className: EDGE_LABEL_WRAPPER_CLASS_NAME,
      attrs: {
        // fill: '#fff',
        radius: 2,
      },
    });

    label.set('zIndex', 1);

    group.sort();
  },

  updateLabelWrapper(group) {
    const label = group.findByClassName(EDGE_LABEL_CLASS_NAME);
    const labelWrapper = group.findByClassName(EDGE_LABEL_WRAPPER_CLASS_NAME);

    if (!label) {
      labelWrapper && labelWrapper.hide();
      return;
    } else {
      labelWrapper && labelWrapper.show();
    }

    if (!labelWrapper) {
      return;
    }

    const { minX, minY, width, height } = label.getBBox();

    labelWrapper.attr({
      x: minX - 5,
      y: minY - 3,
      width: width + 10,
      height: height + 6,
    });
  },

  afterDraw(model, group) {
    this.createLabelWrapper(group);
    this.updateLabelWrapper(group);
  },

  afterUpdate(model, item) {
    const group = item.getContainer();

    this.createLabelWrapper(group);
    this.updateLabelWrapper(group);
  },

  setState(name, value, item) {
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
  },
});

G6.registerEdge(
  'lineNormal',
  bizFlowEdge({
    normal: {
      fill: '#666',
      stroke: '#999',
      arrowFill: '#999',
    },
    selected: {
      stroke: '#aaa',
      shadowColor: '#aaa',
      shadowBlur: 18,
    },
  }),
  'polyline'
);

G6.registerEdge(
  'lineApprove',
  bizFlowEdge({
    normal: {
      fill: '#2acd8f',
      stroke: '#2acd8f',
      arrowFill: '#2acd8f',
    },
    selected: {
      stroke: '#2acd8f',
      shadowColor: '#2acd8f',
      shadowBlur: 18,
    },
  }),
  'polyline'
);

G6.registerEdge(
  'lineReject',
  bizFlowEdge({
    normal: {
      fill: 'red',
      stroke: 'red',
      arrowFill: 'red',
    },
    selected: {
      stroke: 'red',
      shadowColor: 'red',
      shadowBlur: 18,
    },
  }),
  'polyline'
);
