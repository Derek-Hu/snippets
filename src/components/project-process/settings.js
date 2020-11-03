import { formatMessage, isChina } from '~/locale-tools';
export const fontSize = 16;
export const conditionSize = isChina ? fontSize : 10;

export const circleRadius = 30;

export const rectHeight = 45;

export const rectWidth = 106;

export const size = 8;

export const scaleSize = 2;

export const Labels = {
  start: formatMessage({ id: 'start' }),
  end: formatMessage({ id: 'end' }),
  rule: formatMessage({ id: 'rule' }),
  task: formatMessage({ id: 'task' }),
  condition: formatMessage({ id: 'determine-1' }),
  approve: formatMessage({ id: 'personal-trial' }),
  lineApprove: formatMessage({ id: 'adopt' }),
  lineReject: formatMessage({ id: 'refuse' }),
};

export const anchorPoints = [
  [1, 0.5], // 右侧中间
  [0, 0.5], // 左侧中间
  [0.5, 1], // 下方
  [0.5, 0], // 上方
];

export const lineApproveColor = '#2acd8f';

export const lineRejectColor = 'red';

const padding = 20;

export const GridSettings = mode => {
  const modes = {
    view: ['drag-canvas', 'click-node-selection'],
    image: [],
    edit: ['drag-canvas', 'remove-node', 'drag-node', 'drag-add-edge', 'click-node-selection'],
  };
  console.log(mode, 'mode');
  return {
    height: 800,
    fitView: mode === 'image',
    fitViewPadding: [padding, padding, padding, padding],
    modes: {
      default: modes[mode || 'default'],
    },
  };
};

export const ReviewTooltipWidth = isChina ? '6em' : '12em';
