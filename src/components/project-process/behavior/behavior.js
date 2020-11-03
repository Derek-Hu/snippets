import G6 from '@antv/g6';
import { GraphCommonEvent } from './constant';
import { shouldTriggerShortcut } from '../tool/index';

let lastMousedownTarget = null;
window.addEventListener(GraphCommonEvent.onMouseDown, e => {
  lastMousedownTarget = e.target;
});

G6.registerBehavior('remove-node', {
  // 设定该自定义行为需要监听的事件及其响应函数
  getEvents() {
    return {
      [GraphCommonEvent.onKeyDown]: 'bindShortcut', // 监听事件 node:click，响应函数是 onClick,
    };
  },

  bindShortcut(e) {
    if (!shouldTriggerShortcut(this.graph, lastMousedownTarget)) {
      return;
    }
    const { key } = e;
    const shortcuts = ['Delete', 'Backspace'];
    const flag = shortcuts.some(shortcut => {
      return shortcut === key;
    });

    if (flag) {
      e.preventDefault();
      const clickNodes = this.graph.findAllByState('node', 'selected');
      const clickEdges = this.graph.findAllByState('edge', 'selected');

      if (clickEdges) {
        clickEdges.forEach(item => {
          const sourceType = item.getSource().getModel().type;
          const isActionNode = sourceType === 'approve' || sourceType === 'rule' || sourceType === 'task';

          if (isActionNode && item.getTarget().getModel().type === 'condition') {
            const outEdges = item.getTarget().getOutEdges();
            outEdges.forEach(edge => {
              const outEdgeModel = edge.getModel();
              outEdgeModel._val = null;
              outEdgeModel.type = 'lineNormal';
              this.graph.updateItem(edge, outEdgeModel);
            });
          }
          this.graph.removeItem(item);
        });
      }
      if (clickNodes) {
        clickNodes.forEach(item => {
          const sourceType = item.getModel().type;
          const isActionNode = sourceType === 'approve' || sourceType === 'rule' || sourceType === 'task';
          if (sourceType === 'start') {
            return;
          }
          if (isActionNode) {
            const outEdges = item.getOutEdges();
            outEdges.forEach(edge => {
              if (edge.getTarget().getModel().type === 'condition') {
                const conditionOutEdges = edge.getTarget().getOutEdges();
                conditionOutEdges.forEach(ce => {
                  const ceModel = ce.getModel();
                  ceModel._val = null;
                  ceModel.type = 'lineNormal';
                  this.graph.updateItem(ce, ceModel);
                });
              }
            });
          }
          this.graph.removeItem(item);
        });
      }
    }
  },
});

G6.registerBehavior('click-node-selection', {
  getEvents() {
    return {
      'node:click': 'onAction',
      'edge:click': 'onAction',
      'canvas:click': 'onCanvas',
    };
  },
  onCanvas() {
    const clickNodes = this.graph.findAllByState('node', 'selected');
    const clickEdges = this.graph.findAllByState('edge', 'selected');

    clickNodes.forEach(cn => {
      this.graph.setItemState(cn, 'selected', false);
    });
    clickEdges.forEach(ed => {
      this.graph.setItemState(ed, 'selected', false);
    });
  },
  onAction(e) {
    e.preventDefault();
    if (!this.shouldUpdate.call(this, e)) {
      return;
    }
    const clickNodes = this.graph.findAllByState('node', 'selected');
    const clickEdges = this.graph.findAllByState('edge', 'selected');

    const nodeItem = e.item; // 获取被点击的节点元素对象
    let isSelected = false;

    clickNodes.forEach(cn => {
      isSelected = nodeItem === cn;
      this.graph.setItemState(cn, 'selected', false);
    });
    clickEdges.forEach(ed => {
      isSelected = nodeItem === ed;
      this.graph.setItemState(ed, 'selected', false);
    });

    this.graph.setItemState(nodeItem, 'selected', !isSelected); // 设置当前节点的 click 状态为 true
  },
});
