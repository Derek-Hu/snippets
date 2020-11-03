import { formatMessage } from '~/locale-tools';
import React, { PureComponent } from 'react';
import styles from './style.module.less';
import { circleRadius, conditionSize, rectHeight, rectWidth } from '../settings';
import { Labels } from '../settings';
const color = '#aaa';
const bgColor = '#fff';
const wprHeight = circleRadius * 2;
const lineColor = '#a8a8a8';

const ElementWpr = ({ children, label, ondragstart }) => {
  return (
    <div className={styles.root}>
      <div className={styles.element}>
        <div draggable="true" style={{ opacity: 0.8 }} onDragStart={ondragstart}>
          {children}
        </div>
      </div>
      <p className={styles.title}>{label}</p>
    </div>
  );
};
const StartOrEnd = () => {
  const border = 2;
  const lineWidth = circleRadius / 2;
  const twoRadius = 2 * circleRadius;
  const width = twoRadius + lineWidth;
  return (
    <svg width={width} height={wprHeight} xmlns="http://www.w3.org/2000/svg">
      <path
        className={styles.additional}
        d={`M${twoRadius - 1} ${circleRadius} l ${lineWidth} 0`}
        style={{ stroke: lineColor }}
      />
      <circle
        cx={circleRadius}
        cy={circleRadius}
        r={circleRadius - border}
        stroke={color}
        border={border}
        fill={bgColor}
      />
    </svg>
  );
};

const RectNode = props => {
  const lineWidth = circleRadius / 2;
  const width = rectWidth + lineWidth;
  const height = rectHeight;
  const y = (wprHeight - height) / 2;
  return (
    <svg width={width} height={wprHeight} xmlns="http://www.w3.org/2000/svg">
      <path
        className={styles.additional}
        d={`M${rectWidth - 1} ${wprHeight / 2} l ${lineWidth} 0`}
        style={{ stroke: lineColor }}
      />
      <rect x="0" y={y} height={rectHeight} width={rectWidth} style={{ stroke: color, fill: bgColor }} />
      <text x={rectWidth / 2} y="50%" dominantBaseline="middle" textAnchor="middle">
        {props.title}
      </text>
    </svg>
  );
};

const Condition = () => {
  const lineWidth = circleRadius / 2;
  const height = circleRadius * 2;
  const width = height + lineWidth;

  const offset = 4;
  const diamondHeight = (circleRadius - offset) * 2;
  const diamondWidth = circleRadius - offset;
  return (
    <svg width={width} height={wprHeight} xmlns="http://www.w3.org/2000/svg">
      <path
        d={`M ${diamondWidth} 0 L ${diamondHeight} ${diamondWidth} L ${diamondWidth} ${diamondHeight} L 0 ${diamondWidth} Z`}
        style={{ stroke: lineColor, fill: bgColor, strokeWidth: 1 }}
      />
      <path
        className={styles.additional}
        d={`M ${diamondWidth} ${diamondHeight} L ${diamondWidth} ${wprHeight}`}
        style={{ stroke: lineColor }}
      />
      <path
        className={styles.additional}
        d={`M ${diamondWidth * 2} ${diamondHeight / 2} l ${lineWidth} 0`}
        style={{ stroke: lineColor }}
      />
      <text
        style={{ fontSize: conditionSize }}
        x={circleRadius - offset}
        y={circleRadius - offset / 2}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {formatMessage({ id: 'determine-1' })}
      </text>
    </svg>
  );
};

const generateDragStart = type => ev => ev.dataTransfer.setData('text/plain', type);

const startCompDrag = generateDragStart('start');
const ruleCompDrag = generateDragStart('rule');
const conditionCompDrag = generateDragStart('condition');
const approveCompDrag = generateDragStart('approve');
const taskCompDrag = generateDragStart('task');

export default class extends PureComponent {
  render() {
    return (
      <div className={this.props.className + ' ' + styles.toolbar}>
        <span className={styles.name}>{formatMessage({ id: 'toolbar' })}</span>
        <ElementWpr label={`${Labels.start}/${Labels.end}`} ondragstart={startCompDrag}>
          <StartOrEnd />
        </ElementWpr>
        <ElementWpr label={Labels.rule} ondragstart={ruleCompDrag}>
          <RectNode title={Labels.rule} />
        </ElementWpr>
        <ElementWpr label={formatMessage({ id: 'determine-2' })} ondragstart={conditionCompDrag}>
          <Condition />
        </ElementWpr>
        <ElementWpr label={Labels.approve} ondragstart={approveCompDrag}>
          <RectNode title={Labels.approve} />
        </ElementWpr>
        <ElementWpr label={Labels.task} ondragstart={taskCompDrag}>
          <RectNode title={Labels.task} />
        </ElementWpr>
      </div>
    );
  }
}
