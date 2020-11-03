import { formatMessage } from '~/locale-tools';
import React from 'react';
import { Tooltip } from 'antd';
import { RendererType } from '../behavior/constant';
import { AttributesMap } from '~/components/node-config/index';
import { OptionMap } from '../popup/condition';
import { ReviewTooltipWidth } from '../settings';

// 实现以非数字开头：
// 以数字开头的，将0-9 映射为a-j,
// 不以数字开头的，将a-z 映射为A-Z，防止重复
// ['aaaa', '0aaa'] --> ['Aaaa', 'aaaa']
export const number2Char = id => {
  const string = id.toLowerCase();
  const startWithNumber = /^\d/.test(string);
  if (startWithNumber) {
    return String.fromCharCode(string.charCodeAt(0) + 49) + string.substring(1);
  }
  return String.fromCharCode(string.charCodeAt(0) - 32) + string.substring(1);
};

export const shouldTriggerShortcut = (graph, target) => {
  const renderer = graph.get('renderer');
  const canvasElement = graph.get('canvas').get('el');

  if (!target) {
    return false;
  }

  if (target === canvasElement) {
    return true;
  }

  if (renderer === RendererType.Svg) {
    if (target.nodeName === 'svg') {
      return true;
    }

    let parentNode = target.parentNode;

    while (parentNode && parentNode.nodeName !== 'BODY') {
      if (parentNode.nodeName === 'svg') {
        return true;
      } else {
        parentNode = parentNode.parentNode;
      }
    }

    return false;
  }
};

export const getToolTipContent = ({ allGroupInfos, tooltipModel, tooltipVisibleType, reportMap, overlayClassName }) => {
  const { name, policyId, attribute, modules = {}, reports, candidateIds } = tooltipModel || {};
  const moduleTxt = Object.keys(modules)
    .map(key => modules[key].label)
    .join('、');
  const reportTxt = (reports || []).map(type => (reportMap[type] ? reportMap[type].name : '')).join('、');
  const isLine = tooltipVisibleType === 'lineApprove' || tooltipVisibleType === 'lineReject';

  const gropuInfoMap = allGroupInfos.reduce((all, { groupId, groupName }) => {
    all[groupId] = groupName;
    return all;
  }, {});

  const groupsText = candidateIds ? candidateIds.map(id => gropuInfoMap[id]).join('、') : '';
  let title;
  if (tooltipVisibleType === 'approve') {
    const isNotEmpty = attribute || name || moduleTxt || reportTxt;

    title = isNotEmpty ? (
      <table>
        <tr>
          <td style={{ width: ReviewTooltipWidth }}>{formatMessage({ id: 'name-name-of-the' })}: </td>
          <td>&nbsp;{name}</td>
        </tr>
        <tr>
          <td>{formatMessage({ id: 'position-1' })} </td>
          <td>&nbsp;{AttributesMap[attribute]}</td>
        </tr>
        <tr>
          <td>{formatMessage({ id: 'permission-group-1' })} </td>
          <td>&nbsp;{groupsText}</td>
        </tr>
        <tr>
          <td>{formatMessage({ id: 'internal-audit' })}: </td>
          <td>&nbsp;{moduleTxt}</td>
        </tr>
        <tr>
          <td>{formatMessage({ id: 'tripartite-audit' })}: </td>
          <td>&nbsp;{reportTxt}</td>
        </tr>
      </table>
    ) : null;
  } else if (tooltipVisibleType === 'rule') {
    const isNotEmpty = name || policyId;
    title = isNotEmpty ? (
      <table>
        <tr>
          <td>{formatMessage({ id: 'rule-name' })}: </td>
          <td>&nbsp;{name}</td>
        </tr>
        <tr>
          <td>Strategy ID: </td>
          <td>&nbsp;{policyId}</td>
        </tr>
      </table>
    ) : null;
  } else if (isLine) {
    const { category, condition } = tooltipModel;
    console.log('tooltipModel', tooltipModel);
    if ('category' in tooltipModel) {
      const isNotEmpty = category || condition;
      title = isNotEmpty ? (
        <table>
          <tr>
            <td>{formatMessage({ id: 'attribute' })}: </td>
            <td>&nbsp;{OptionMap[category].label}</td>
          </tr>
          <tr>
            <td>{formatMessage({ id: 'type' })}: </td>
            <td>&nbsp;{OptionMap[category].children[condition]}</td>
          </tr>
        </table>
      ) : null;
    }
  }
  if (tooltipVisibleType && title) {
    return (
      <Tooltip
        placement={'top'}
        overlayClassName={overlayClassName}
        title={title}
        visible={!!tooltipVisibleType}
      ></Tooltip>
    );
  }
};

export const hasErrors = fieldsError => {
  if (!fieldsError) {
    return false;
  }
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};
