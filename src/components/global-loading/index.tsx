import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface IProps {
  circle: number;
  isInner: boolean;
  visible: boolean;
}
export default ({ isInner, visible, circle = 20, ...others }: IProps) => {
  return (
    <div {...others} className={classnames(['loading', { 'inner-loading': isInner }, { visible: visible }])}>
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r={circle} fill="none" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
      </div>
    </div>
  );
};
