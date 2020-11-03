import { formatMessage } from '~/locale-tools';
import { Cascader, Tag, Icon } from 'antd';
import React from 'react';
import styles from './style.module.less';

const placeholder = formatMessage({ id: 'select-select-internal-audit' });

export default class ModuleInput extends React.Component {
  state = {};

  onModuleChange = (value, selectedOptions) => {
    const { onChange, value: modules = {} } = this.props;

    const label = selectedOptions.map(opt => opt.label).join('/');
    modules[value[1]] = {
      label,
      config: value[2],
      fieldCode: selectedOptions[2] ? selectedOptions[2].fieldCode : null,
    };
    console.log('onModuleChange', modules);

    this.shouldOpenPopup = true;

    if (onChange) {
      onChange(modules);
    }
  };

  removeTag = (e, key) => {
    e.stopPropagation();
    const { onChange, value = {} } = this.props;
    delete value[key];
    console.log('removeTag', value);

    if (onChange) {
      if (!Object.keys(value).length) {
        onChange(undefined);
        return;
      }
      onChange(value);
    }
  };

  displayRender = (a, b) => {
    console.log('displayRender', a, b);
    return <span style={{ color: '#a3afb7' }}>{placeholder}</span>;
  };

  onPopupVisibleChange = val => {
    if (val === true) {
      this.setState({
        visible: true,
      });
      return;
    }
    console.log('onPopupVisibleChange', this.shouldOpenPopup);

    if (!this.shouldOpenPopup) {
      console.log('set visible', this.shouldOpenPopup);
      this.setState({
        visible: false,
      });
    }
    this.shouldOpenPopup = false;
  };
  render() {
    let { settings = [], value = {} } = this.props;
    const { visible } = this.state;
    const labelKeys = Object.keys(value);
    // console.log('value, labelKeys', value, labelKeys);
    return (
      <div>
        {labelKeys.length ? (
          <Cascader
            options={settings}
            menuItemSelectedIcon={<Icon type="check-circle" />}
            expandTrigger="hover"
            popupVisible={visible}
            placeholder={placeholder}
            onPopupVisibleChange={this.onPopupVisibleChange}
            onChange={this.onModuleChange}
          >
            <span className={styles.tagWpr}>
              {labelKeys.map(key => (
                <Tag key={key} onClose={e => this.removeTag(e, key)} closable>
                  {value[key].label}
                </Tag>
              ))}
            </span>
          </Cascader>
        ) : (
          <Cascader
            allowClear={false}
            options={settings}
            popupVisible={visible}
            onPopupVisibleChange={this.onPopupVisibleChange}
            expandTrigger="hover"
            menuItemSelectedIcon={<Icon type="check-circle" />}
            displayRender={this.displayRender}
            placeholder={placeholder}
            onChange={this.onModuleChange}
          />
        )}
      </div>
    );
  }
}
