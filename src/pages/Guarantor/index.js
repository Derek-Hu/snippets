import { formatMessage } from '~/locale-tools';
import React from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Select, message, Icon } from 'antd';
import _ from 'lodash';
import { getReviewModulesConfig } from '~/pages/basic/new-approvel-center/commercial-loans/services/common';
import { getGuarantor } from '~/pages/basic/new-approvel-center/commercial-loans/services/guarantor';

const Option = Select.Option;
const FormItem = Form.Item;

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const GUARANTORTYPE = [
  {
    name: formatMessage({ id: 'warrant' }),
    value: 'GUARANTEE',
  },
  {
    name: formatMessage({ id: 'mortgage-agreement-mortgage-agreement-to' }),
    value: 'MORTGAGE',
  },
  {
    name: formatMessage({ id: 'simultaneous-guarantee-and-mortgage' }),
    value: 'GUARANTEE_AND_MORTGAGE',
  },
];

class EditableCell extends React.Component {
  handleProvinceChange = value => {
    this.props.updateRow(
      Object.assign({}, this.props.record, {
        relationship: value,
        relationDisplayName: this.props.relationshipmapping[value],
        name: null,
        cardNum: null,
        mobilePhone: null,
        shares: null,
      })
    );
  };

  handlePernsonalChange = cardNum => {
    const infos = this.props.guarantorpersonalsdata.filter(person => person.cardNum === cardNum);

    this.props.updateRow(Object.assign({}, this.props.record, infos[0]));
  };

  handleTypeChange = value => {
    this.props.updateRow(
      Object.assign({}, this.props.record, {
        type: value,
      })
    );
  };

  personalUnderRelation(key) {
    if (!this.personalRelationMapping) {
      const personnelData = Object.keys(this.props.relationshipmapping).reduce((total, key) => {
        total[key] = [];
        return total;
      }, {});

      this.props.guarantorpersonalsdata.reduce((metas, person) => {
        if (!metas[person.relationship]) {
          metas[person.relationship] = [];
        }

        metas[person.relationship].push(person);

        return metas;
      }, personnelData);

      this.personalRelationMapping = personnelData;
    }

    return this.personalRelationMapping[key];
  }

  getInput = record => {
    switch (this.props.inputType) {
      case 'number':
        return (
          <InputNumber
            min={0}
            max={100}
            step={0.1}
            precision={2}
            disabled={this.props.record.shares === null}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
          />
        );
      case 'select':
        switch (this.props.dataIndex) {
          case 'relationDisplayName':
            return (
              <Select
                style={{ width: '100%' }}
                onChange={value => this.handleProvinceChange(value)}
                placeholder={formatMessage({ id: 'please-choose' })}
                showSearch
                optionFilterProp="children"
              >
                {Object.keys(this.props.relationshipmapping).map(key => (
                  <Option key={key}>{this.props.relationshipmapping[key]}</Option>
                ))}
              </Select>
            );
          case 'type':
            return (
              <Select
                style={{ width: '100%' }}
                onChange={value => this.handleTypeChange(value)}
                placeholder={formatMessage({ id: 'please-choose' })}
                showSearch
                optionFilterProp="children"
              >
                {GUARANTORTYPE.map(item => (
                  <Option key={item.value} value={item.value}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            );
          default:
            const personList = this.personalUnderRelation(record.relationship) || [];

            return (
              <Select
                style={{ width: '100%' }}
                onChange={value => {
                  this.handlePernsonalChange(value.split('||')[0]);
                }}
                disabled={personList.length < 1}
                placeholder={formatMessage({ id: 'please-choose' })}
                showSearch
                optionFilterProp="children"
              >
                {personList.map(item => (
                  <Option key={item['cardNum'] + '||' + item['name']}>{item['name']}</Option>
                ))}
              </Select>
            );
        }
      default:
        return this.props.dataIndex === 'shares' ? <Input /> : <Input disabled />;
    }
  };

  render() {
    const { editing, dataIndex, title, record, inputType, index, ...restProps } = this.props;

    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(record.cardNum + '-' + dataIndex, {
                    rules: [
                      {
                        required: dataIndex !== 'shares' ? true : false,
                        message: `Please Input ${title}!`,
                      },
                    ],
                    initialValue: record[dataIndex],
                  })(this.getInput(record))}
                </FormItem>
              ) : (
                restProps.children
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);

    this.lastRowKey = '';
    this.defaultRelation = '';
    this.lastRowData = {
      relationship: this.defaultRelation,
      name: '',
      cardNum: this.lastRowKey,
      mobilePhone: '',
      shares: null,
      key: this.getKey(this.lastRowKey, this.defaultRelation),
    };
    this.guarantorPersonalsData = []; // 所有的人 guarantorPersonals
    this.relationshipMapping = {}; // 关系映射 {FRIEND:'朋友'，CUPLE:'夫妻'}
    this.state = {
      data: [],
      editingKey: this.lastRowData.key, // 初始编辑最后一条
      loading: true,
    };

    const editable = props.editable;

    this.columns = [
      {
        title: formatMessage({ id: 'serial-number' }),
        dataIndex: 'listIndex',
        width: '5%',
        editable: false,
        render: (text, record) => {
          return this.state.data.indexOf(record) + 1;
        },
      },
      {
        title: formatMessage({ id: 'correlation' }),
        dataIndex: 'relationDisplayName',
        width: '18%',
        editable,
      },
      {
        title: formatMessage({ id: 'name-of-guarantor' }),
        dataIndex: 'name',
        width: '10%',
        editable,
      },
      {
        title: formatMessage({ id: 'id-card-no' }),
        dataIndex: 'cardNum',
        width: '18%',
        editable,
      },
      {
        title: formatMessage({ id: 'phone-number' }),
        dataIndex: 'mobilePhone',
        width: '12%',
        editable,
      },
      {
        title: formatMessage({ id: 'share' }),
        dataIndex: 'shares',
        width: '5%',
        editable,
      },
      {
        title: formatMessage({ id: 'set-type' }),
        dataIndex: 'type',
        width: '17%',
        editable,
        render: value => value && GUARANTORTYPE.find(item => item.value === value).name,
      },
    ];

    if (editable) {
      this.columns.push({
        title: formatMessage({ id: 'operation' }),
        dataIndex: 'operation',
        render: (text, record) => {
          const editable = this.isEditing(record);
          const isLastRow = this.state.data.indexOf(record) === this.state.data.length - 1;

          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <span>
                        {isLastRow ? (
                          <a onClick={() => this.add(form, record.key)} style={{ marginRight: 2 }}>
                            {formatMessage({ id: 'warrant' })}
                          </a>
                        ) : (
                          <a
                            onClick={() => this.save(form, record.key)}
                            style={{ marginRight: 10 }}
                            title={formatMessage({ id: 'preservation' })}
                          >
                            <Icon type="file" />
                          </a>
                        )}
                      </span>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    onConfirm={() => this.cancel(record.key)}
                    overlayClassName="commercial-loans-popconfirm"
                    title={formatMessage({ id: 'define-cancel' })}
                  >
                    {isLastRow ? null : (
                      <a style={{ marginRight: 10 }} title={formatMessage({ id: 'cancel' })}>
                        <Icon type="rollback" style={{ marginRight: 2 }} />
                      </a>
                    )}
                  </Popconfirm>
                </span>
              ) : (
                <a
                  onClick={() => this.edit(record.key)}
                  style={{ marginRight: 10 }}
                  title={isLastRow ? formatMessage({ id: 'newly-added' }) : formatMessage({ id: 'edit' })}
                >
                  {isLastRow ? <Icon type="user-add" /> : <Icon type="edit" />}
                </a>
              )}

              <Popconfirm
                onConfirm={() => this.del(record.key)}
                overlayClassName="commercial-loans-popconfirm"
                title={formatMessage({ id: 'define-delete' })}
              >
                {isLastRow ? null : (
                  <a style={{ marginRight: 10 }} title={formatMessage({ id: 'delete' })}>
                    <Icon type="delete" />
                  </a>
                )}
              </Popconfirm>
            </div>
          );
        },
      });
    }

    this.cacheData = {
      data: Object.assign(
        {},
        this.state.data.find(item => this.lastRowData.key === item.key)
      ),
      key: this.lastRowData.key,
    };

    this.saveListData();
  }

  async componentDidMount() {
    const { creditReviewOrderId, nodeId, startTime, endTime } = this.props;
    const reviewModulesConfigResponse = await getReviewModulesConfig(creditReviewOrderId, 'PERSONAL_GUARANTEE', nodeId);
    const guarantorResponse = await getGuarantor(creditReviewOrderId, startTime, endTime);

    if (guarantorResponse && !_.isEmpty(guarantorResponse.result)) {
      const savedGuarantors = {};

      (guarantorResponse.result.savedGuarantors || []).forEach(item => {
        if (savedGuarantors[item.cardNum]) {
          savedGuarantors[item.cardNum].type = 'GUARANTEE_AND_MORTGAGE';
        } else {
          savedGuarantors[item.cardNum] = item;
        }
      });

      const defaultGuarantors =
        (reviewModulesConfigResponse &&
          !_.isEmpty(reviewModulesConfigResponse.result) &&
          reviewModulesConfigResponse.result[0].configItems &&
          reviewModulesConfigResponse.result[0].configItems.defaultGuarantor) ||
        [];
      const data =
        (!_.isEmpty(savedGuarantors) && Object.values(savedGuarantors)) ||
        (_.isArray(defaultGuarantors) && defaultGuarantors) ||
        [];
      const guarantorPersonalsDataTmp = guarantorResponse.result.guarantorPersonals || [];
      const relationship = guarantorResponse.result.relationship || [];
      const relationshipDefault = [];

      guarantorPersonalsDataTmp.map(item => {
        const relationship = item['relationship'];

        item.shares = item.shares === null ? '' : item.shares;

        relationship.map(value => {
          this.guarantorPersonalsData.push({
            relationship: value,
            name: item.name,
            cardNum: item.cardNum,
            mobilePhone: item.mobilePhone,
            shares: item.shares,
          });

          if (relationshipDefault.indexOf(value) < 0) {
            relationshipDefault.push(value);
          }
        });
      });

      for (let m = 0; m < relationshipDefault.length; m++) {
        const code = relationshipDefault[m];

        for (let i = 0; i < relationship.length; i++) {
          if (code === relationship[i]['code']) {
            this.relationshipMapping[code] = relationship[i]['value'];
            break;
          }
        }
      }

      if (this.props.editable && guarantorPersonalsDataTmp.length) {
        data.push(Object.assign({}, this.lastRowData));
      }

      data.forEach((l, index) => {
        l.key = this.getKey(l.cardNum, l.relationship);
        l.listIndex = index + 1;
        l.relationDisplayName = this.relationshipMapping[l.relationship];
      });

      this.setState(
        {
          data,
          editingKey: this.lastRowData.key,
        },
        () => {
          this.saveListData();
        }
      );

      this.setInitCacheData();
    }

    this.setState({
      loading: false,
    });
  }

  getKey = (cardNum, relationship) => cardNum + '---' + relationship;

  isEditing = record => record.key === this.state.editingKey;

  formValidateFields = (form, key, type) => {
    return new Promise((resolve, reject) => {
      form.validateFields((error, row) => {
        if (error) {
          reject(error);
        } else {
          Object.keys(row).forEach(attr => {
            const attrName = attr.split('-')[1];

            if (attrName) {
              row[attrName] = attrName === 'name' && /\|\|/.test(row[attr]) ? row[attr].split('||')[1] : row[attr];
              delete row[attr];
            }
          });

          const newData = [...this.state.data];
          // 该条索引是否存在 存在为保存已有数据 不存在则新增
          const index = newData.findIndex(item => key === item.key);
          // 修改的该条数据的cardNum是否与已经存在的其他数据的cardNum 一致
          let otherData = JSON.parse(JSON.stringify(Object.assign(newData, [])));

          otherData.splice(index, 1);

          const indexExisted = otherData.findIndex(item => row.cardNum === item.cardNum);

          if (indexExisted > -1) {
            message.warning(formatMessage({ id: 'identical-revise-set-up-type' }));
            return;
          }

          if (index > -1) {
            const item = newData[index];

            newData.splice(index, 1, {
              ...item,
              ...row,
              key: this.getKey(row.cardNum, item.relationship),
            });
          } else {
            newData.push(row);
          }

          resolve(newData);
        }
      });
    });
  };

  setInitCacheData() {
    this.cacheData = {
      data: Object.assign(
        {},
        this.state.data.find(item => this.lastRowData.key === item.key)
      ),
      key: this.lastRowData.key,
    };
  }

  cancel = () => {
    const previousData = this.state.data;

    const index = previousData.findIndex(data => data.key === this.state.editingKey);
    previousData[index] = this.cacheData.data;
    this.cacheData = null;

    this.setState(
      {
        data: previousData,
        editingKey: this.lastRowData.key,
      },
      () => {
        this.saveListData();
      }
    );

    this.setInitCacheData();
  };

  save(form, key) {
    this.formValidateFields(form, key).then(
      newData => {
        this.setState(
          {
            data: newData,
            editingKey: this.lastRowData.key,
          },
          () => {
            this.saveListData();
          }
        );

        // 保存之后默认开启最后一行的edit状态  但因为不是手动点击edit事件 故无法存取 需手动设置与初始状态一致
        this.setInitCacheData();
      },
      () => {}
    );

    this.editting = false;
  }

  add(form, key) {
    this.formValidateFields(form, key).then(
      newData => {
        // 设为担保成功后在后面追加一条默认数据
        const addedData = Object.assign({}, this.lastRowData);

        addedData.key = this.getKey(addedData.cardNum, addedData.relationship);
        addedData.listIndex = this.state.data.length + 1;
        addedData.relationDisplayName = this.relationshipMapping[addedData.relationship];

        newData.push(Object.assign({}, addedData));

        this.setState(
          {
            data: newData,
            editingKey: this.lastRowData.key,
          },
          () => {
            this.saveListData();
          }
        );

        this.cacheData = {
          data: Object.assign({}, addedData),
          key: this.lastRowData.key,
        };
      },
      () => {}
    );
  }

  edit = key => {
    const previousData = this.state.data;

    if (this.cacheData) {
      const index = previousData.findIndex(item => this.cacheData.key === item.key);

      previousData[index] = this.cacheData.data;
      this.setState({
        data: previousData,
      });
    }

    this.cacheData = {
      data: Object.assign(
        {},
        previousData.find(item => key === item.key)
      ),
      key: key,
    };

    this.setState(
      {
        editingKey: key,
      },
      () => {
        this.saveListData();
      }
    );
  };

  updateRow = personalInfo => {
    const index = this.state.data.findIndex(item => item.key === this.state.editingKey);

    Object.assign(this.state.data[index], personalInfo);

    this.setState({
      data: this.state.data,
    });
  };

  del = key => {
    this.cancel();

    const index = this.state.data.findIndex(item => key === item.key);

    this.state.data.splice(index, 1);
    this.setState(
      {
        data: this.state.data,
        editingKey: this.lastRowData.key,
      },
      () => {
        this.saveListData();
      }
    );
  };

  saveListData() {
    const listData = JSON.parse(JSON.stringify(this.state));

    listData.data.pop();
    listData.data.forEach(item => {
      item.shares = item.shares || item.shares === 0 ? parseFloat(item.shares) : '';
      delete item.key;
      delete item.listIndex;
      delete item.relationDisplayName;
    });

    const { changeState } = this.props;

    changeState && changeState({ guarantorPersonal: listData });
  }

  render() {
    const { loading } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => {
          return {
            record,
            inputType:
              col.dataIndex === 'relationDisplayName' || col.dataIndex === 'name' || col.dataIndex === 'type'
                ? 'select'
                : col.dataIndex === 'shares'
                ? 'number'
                : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            updateRow: this.updateRow,
            editing: this.isEditing(record),
            relationshipmapping: this.relationshipMapping,
            guarantorpersonalsdata: this.guarantorPersonalsData,
          };
        },
      };
    });

    if (loading) {
      return <div />;
    }

    return (
      <section className="content-section">
        <div className="content-section-header">{formatMessage({ id: 'guarantee-information' })}</div>
        <div className="content-section-main">
          <Table
            components={components}
            dataSource={this.state.data}
            columns={columns}
            rowClassName="editable-row"
            pagination={false}
            rowKey={record => record.key}
          />
        </div>
      </section>
    );
  }
}
