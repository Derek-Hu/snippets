接口文档如下：

数据格式参考: `src/components/webVOWL/node/sample.js`

```js
/**
 * 原始组件：http://visualdataweb.de/webvowl/#
 * 详细的接口自定义接口见：webVOWL/app/js/app.js#initialize
 */
import webvowlApp from '~/components/webVOWL';

/**
 * 当节点被双击时的回调
 * @param {Entity} entity 节点对象
 * @param {App} app 图像实例
 * @param {Array.<Entity>} app 图像中所有节点对象
 */

const onElementDbClick = (entity, app, entities) => {};

/**
 * 当节点被选中时的回调
 * @param {Entity} entity 节点对象
 * @param {App} app 图像实例
 * @param {Array.<Entity>} app 图像中所有节点对象
 */
const onElementSelect = (entity, app, entities) => {};

/**
 * 当右键节点时的回调
 * @param {Entity} node 节点对象
 * @param {Object} position 鼠标点击位置
 */
const onElementRightClick = (node, { x, y }) => {};
/**
 * 当图像渲染成功时的回调
 * @param {App} app 图像实例
 * @param {Array.<Entity>} app 图像中所有节点对象
 */
const onRenderSuccess = (app, entities) => {};

ReactDOM.render(
  <WebVOWL
    data={graphData}
    onElementDbClick={onElementDbClick}
    onElementSelect={onElementSelect}
    onRenderSuccess={onRenderSuccess}
    // 设置图像宽高度
    width={1000}
    height={500}
    // 设置为图片格式显示
    isImage={true}
  />,

  document.getElementById('root')
);

this.app = webvowlApp();
this.app.initialize({
  // 当元素被点击时，获取的元素信息
  onElementSelect: this.onElementSelect,
  // 当元素被双击时的回调
  onElementDbClick: this.onElementDbClick,
  // 当图像渲染完成时的回调
  onRenderSuccess: this.onRenderSuccess,
  // 当右键节点时的回调
  onElementRightClick: this.onElementRightClick,
});

// 获取所有可搜索节点
const searchRes = this.app.searchElement();
// 高亮元素
this.app.locateElementById(searchRes[1].id);
// 定位元素，并自动缩放
this.app.locateSearchResult();
// 设置是否显示/隐藏放大器
this.app.showSlider(false);
// 设置实体间的距离
this.app.setClassDistance(600);
// 设置关系间的距离
this.app.setDataTypeDistance(600);
// 是否隐藏父子关系中的Label
this.app.hideCompactNotation(true);
// 设置关系Label的最大宽度
this.app.setDynamicLabelWidth(70);
// 设置图片静止/动态
this.app.setPauseValue(true);
// 设置图像居中
this.app.centerGraph();
// 设置节点遮罩效果
this.app.updateLayerData(id, {
  type: 'blue', // 或者 'red',
  label: '清白',
});
// 设置Device节点背景色 black, gray
this.app.updateNodeClassName(id, 'gray');
// 设置节点背景色 white, black, gray
this.app.updateNodeBgColor(id, 'white');
// 过滤显示节点，自动隐藏节点相关边
this.app.setCustomerFilter(function(node) {
  return true;
});
// 导出为图片格式
const { dataURI, svg } = this.app.exportSvgData();
console.log('图片Base64内容: ', dataURI);
console.log('图片SVG格式: ', svg);
```
