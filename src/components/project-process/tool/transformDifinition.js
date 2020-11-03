import { formatMessage } from '~/locale-tools';
import guid from 'uuid/v1';
import { number2Char } from './index';

const ReviewType = {
  first: {
    CREDIT: 'creditFirstReview',
    LOAN: 'disburseFirstReview',
    ID: 'manualFirstReview',
  },
  final: {
    CREDIT: 'creditFinalReview',
    LOAN: 'disburseFinalReview',
    ID: 'manualFinalReview',
  },
  phone: {
    CREDIT: 'telephoneReview',
    LOAN: 'telephoneReview',
    ID: 'telephoneReview',
  },
  anti: {
    CREDIT: 'antiFraud',
    LOAN: 'antiFraud',
    ID: '',
  },
  mortgage: {
    CREDIT: 'creditFinalReview',
    LOAN: 'disburseFinalReview',
    ID: 'manualFinalReview',
  },
  operationVerification: {
    CREDIT: 'creditFinalReview',
    LOAN: 'disburseFinalReview',
    ID: 'manualFinalReview',
  },
};
const ElementType = {
  start: 'start',
  end: 'end',
  rule: 'policy',
  condition: 'condition',
};

export default ({ graphData, creditReviewType }) => {
  const definition = {
    elements: [],
    relations: [],
  };

  const candidatePos = [];
  const idMaps = {};
  const nodeIdx = {};
  const posionMap = {};

  const hasStartEnd = graphData.nodes && graphData.nodes.filter(node => node.type === 'start' || node.type === 'end');
  if (!hasStartEnd || !hasStartEnd.length) {
    throw new Error(formatMessage({ id: 'lack-panel-point-missing-start' }));
  }
  if (hasStartEnd.length === 1) {
    throw new Error(
      hasStartEnd[0].type === 'start'
        ? formatMessage({ id: 'missing-end-node' })
        : formatMessage({ id: 'missing-start-node' })
    );
  }
  if (hasStartEnd.length === 2 && graphData.nodes.length === 2) {
    throw new Error(formatMessage({ id: 'examine-and-approve-bug-adjust-the' }));
  }
  graphData.nodes.forEach((node, index) => {
    if (node.type === 'placeholder') {
      return;
    }
    const { upperLeft, lowerRight } = node;
    const element = {
      upperLeft,
      lowerRight,
    };

    const val = node._val;
    const isApproveType = node.type === 'approve';
    const isTaskType = node.type === 'task';
    const isRuleType = node.type === 'rule';

    if (isApproveType) {
      if (
        !val ||
        !val.name ||
        !val.attribute
        //  || !val.modules || !Object.keys(val.modules).length
      ) {
        throw new Error(formatMessage({ id: 'panel-point-data-bug-incomplete' }));
      }

      const reviewCode = ReviewType[val.attribute][creditReviewType];
      element.type = reviewCode;

      if (val.candidateIds && val.candidateIds.length) {
        candidatePos.push({
          nodeCode: reviewCode,
          candidateIds: val.candidateIds,
        });
      }
    } else if (isTaskType) {
      if (!val || !val.task) {
        throw new Error(formatMessage({ id: 'incomplete-task-node-data' }));
      }
      element.type = val.task;
    } else {
      element.type = ElementType[node.type];
    }

    if (isRuleType) {
      if (!val || !val.policyId || !val.name) {
        throw new Error(formatMessage({ id: 'bug-incomplete-data-of' }));
      }
      element.others = { nodeId: val.policyId };
    }

    // id不能以数字开头
    const useName = isApproveType || isRuleType;
    if (useName && /^\d/.test(val.name)) {
      throw new Error(
        `${formatMessage({ id: 'node-name' })}${val.name}${formatMessage({ id: 'figure-begin-cannot-start' })}`
      );
    }
    const uid = guid();
    element.id = useName ? val.name : number2Char(uid);

    posionMap[node.id] = {
      upperLeft,
      lowerRight,
    };
    idMaps[node.id] = element.id;
    nodeIdx[node.id] = index;

    definition.elements.push(element);
  });

  const allUsedIds = {};
  graphData.edges.forEach(edge => {
    allUsedIds[edge.source] = true;
    allUsedIds[edge.target] = true;
    const relation = { source: idMaps[edge.source], targets: [] };
    const isFromCondition = graphData.nodes[nodeIdx[edge.source]].type === 'condition';
    if (isFromCondition && (!edge._val || !edge._val.condition)) {
      throw new Error(formatMessage({ id: 'bug-the-node-data' }));
    }
    const target = {
      id: idMaps[edge.target],
      dockers: edge._controlPoints,
      condition: isFromCondition ? edge._val.condition : null,
      ...posionMap[edge.target],
    };
    relation.targets.push(target);
    definition.relations.push(relation);
  });

  if (Object.keys(allUsedIds).length < graphData.nodes.filter(node => node.type !== 'placeholder').length) {
    throw new Error(formatMessage({ id: 'exist-relevance-isolated-node-there' }));
  }
  return [candidatePos, definition];
};
