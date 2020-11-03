import { anchorPoints } from '../settings';
import { setAnchorPointsState } from '../common/anchor';
import { setKeyShapeSelectedState, DefaultStateOptions } from '../common/node-selection';

export default {
  options: DefaultStateOptions,

  getAnchorPoints() {
    return anchorPoints;
  },

  setState(name, value, item) {
    setAnchorPointsState.call(this, name, value, item);
    setKeyShapeSelectedState.call(this, name, value, item);
  },
};
