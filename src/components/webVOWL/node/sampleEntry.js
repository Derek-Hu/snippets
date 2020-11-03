import React from 'react';
import ReactDOM from 'react-dom';

import mockData from './sample';
import WebVOWL from '~/components/webVOWL';

const onRenderSuccess = app => {
  setTimeout(() => {
    app.setPauseValue(true);
    app.centerGraph();
    app.updateNodeBgColor('5', 'white');
    app.setCustomerFilter(function(node) {
      // return node.drType !== 'deviceLocation';
      return true;
    });
  }, 1500);

  // 设置实体间的距离
  app.setClassDistance(100);
  // 设置关系间的距离
  app.setDataTypeDistance(100);
};

const onNodeSelect = node => {
  console.log(node);
};
ReactDOM.render(
  <WebVOWL
    data={mockData}
    width={window.innerWidth - 350 < 1000 ? 1000 : window.innerWidth - 350}
    height={window.innerHeight < 800 ? 800 : window.innerHeight}
    // isImage={true}
    onRenderSuccess={onRenderSuccess}
    onElementSelect={onNodeSelect}
  />,
  document.getElementById('root')
);
