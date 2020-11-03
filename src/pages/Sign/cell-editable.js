import { formatMessage } from '~/locale-tools';
import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import uuidv1 from 'uuid/v1';
import { Table, Input, Button, Popconfirm, Form, Icon } from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({ form, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const EmptyRow = {
  key: '0',
  isFirst: true,
  required: true,
  description: formatMessage({ id: 'add-rows' }),
  type: 'DOCUMENT',
};
class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }
  toggleEdit = r => {
    if (r && r.description === formatMessage({ id: 'please-fill-in' })) {
      r.description = '';
    }
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };
  handleClickOutside = e => {
    const { editing } = this.state;
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  };

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (!error) {
        this.toggleEdit();
        handleSave({ ...record, ...values });
      }
    });
  };

  render() {
    const { editing } = this.state;
    const { editable, dataIndex, title, record, ...restProps } = this.props;
    return (
      <td ref={node => (this.cell = node)} {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {form => {
              this.form = form;
              return editing ? (
                <FormItem style={{ margin: 0 }}>
                  {form.getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `${title}${formatMessage({ id: 'cannot-be-empty!' })}`,
                      },
                    ],
                    initialValue: record[dataIndex],
                  })(
                    <Input
                      style={{ width: '90%' }}
                      ref={node => (this.input = node)}
                      onPressEnter={this.save}
                      disabled={record.isFirst ? true : false}
                    />
                  )}
                  {record.isFirst ? null : (
                    <a
                      title={formatMessage({ id: 'preservation' })}
                      onClick={() => {
                        this.save();
                      }}
                      style={{ marginLeft: '20px' }}
                    >
                      <Icon type="save" />
                    </a>
                  )}
                </FormItem>
              ) : (
                <div
                  className="editable-cell-value-wrap"
                  style={{ paddingRight: 24 }}
                  onClick={
                    record.isFirst || (record.fixed && record.fixed === 'unfixed')
                      ? null
                      : () => {
                          this.toggleEdit(record);
                        }
                  }
                >
                  {restProps.children}
                  {record.isFirst || (record.fixed && record.fixed === 'unfixed') ? null : (
                    <a
                      title={formatMessage({ id: 'edit' })}
                      onClick={() => {
                        this.toggleEdit();
                      }}
                      style={{ marginLeft: '20px' }}
                    >
                      <Icon type="edit" />
                    </a>
                  )}
                </div>
              );
            }}
          </EditableContext.Consumer>
        ) : (
          restProps.children
        )}
      </td>
    );
  }
}

const getStateData = (nextProps, prevState) => {
  let dataSource = nextProps.dataSource || [];
  let { deductionAccount, guarantorPersonal, loanSettlement } = nextProps.approveData;
  let editDataSource = prevState.editDataSource || [];
  let currentDataSource = dataSource;

  const { reviewModules } = nextProps;
  const hasPersonalGuarantee = (reviewModules || []).indexOf('PERSONAL_GUARANTEE') !== -1;

  // currentDataSource = dataSource.filter(
  //   item =>
  //     item.type !== 'GUARANTEE' &&
  //     item.type !== 'DEDUCT_CARD' &&
  //     item.description.indexOf(formatMessage({ id: 'superscript-settle-borrow-money-number' })) <= -1
  // );

  let list = currentDataSource.map(item => ({
    ...item,
    fixed: 'unfixed',
    key: uuidv1(),
  }));

  const selectedRowKeys = list.filter(({ required }) => !!required).map(item => item.key);

  list.unshift(EmptyRow);

  if (!_.isEmpty(deductionAccount)) {
    const isDeductionGuarantor = ((guarantorPersonal && guarantorPersonal.data) || []).find(item =>
      deductionAccount.ssn ? item.cardNum === deductionAccount.ssn : item.name === deductionAccount.bankAccountName
    );

    list.unshift({
      description: `${formatMessage({ id: 'binding' })}${deductionAccount.bankAccountName}${formatMessage({
        id: 'name-1',
      })}${deductionAccount.bankName}${formatMessage({ id: 'the-tail-number-is' })}${
        deductionAccount.bankAccountTailNo
      }${formatMessage({ id: 'account-withholding-repayment-of' })}`,
      ownerType: isDeductionGuarantor ? 'GUARANTOR' : 'BORROWER',
      ownerName: null,
      required: true,
      ownerSsn: null,
      type: 'DEDUCT_CARD',
      fixed: 'unfixed',
      key: uuidv1(),
      from: 'db',
    });
  }

  if (!_.isEmpty(loanSettlement) && _.isArray(loanSettlement)) {
    loanSettlement
      .filter(item => item.advancePayment)
      .map(item => {
        list.unshift({
          description: `${formatMessage({ id: 'superscript-settle-borrow-money-number' })}${
            item.loanId
          }${formatMessage({ id: '-1' })}`,
          ownerType: 'BORROWER',
          ownerName: null,
          required: true,
          ownerSsn: null,
          type: 'DOCUMENT',
          fixed: 'unfixed',
          key: uuidv1(),
          from: 'db',
        });
      });
  }

  if (hasPersonalGuarantee) {
    list = list.filter(item => item.type !== 'MORTGAGE' && item.type !== 'GUARANTEE');
  }

  if (!_.isEmpty(guarantorPersonal)) {
    guarantorPersonal.data.forEach(item => {
      const isExists = list.some(sign => {
        const { cardNum, name, type } = item;
        const { ownerSsn, ownerName, type: _type } = sign;
        return cardNum === ownerSsn && type === _type && name === ownerName;
      });
      if (isExists) {
        return;
      }
      const data = {
        fixed: 'unfixed',
        from: 'db',
        key: uuidv1(),
        ownerName: item.name,
        ownerSsn: item.cardNum,
        required: true,
      };

      if (item.type === 'MORTGAGE' || item.type === 'GUARANTEE_AND_MORTGAGE') {
        list.unshift(
          Object.assign({}, data, {
            key: uuidv1(),
            description: `${formatMessage({ id: 'natural-person' })}${item.name}/${item.cardNum}${formatMessage({
              id: 'need-to-sign-mortgage',
            })}`,
            ownerType: 'MORTGAGOR',
            type: 'MORTGAGE',
          })
        );
      }

      if (!item.type || item.type === 'GUARANTEE' || item.type === 'GUARANTEE_AND_MORTGAGE') {
        list.unshift(
          Object.assign({}, data, {
            key: uuidv1(),
            description: `${formatMessage({ id: 'natural-person' })}${item.name}/${item.cardNum}${formatMessage({
              id: 'provide-guarantee',
            })}`,
            ownerType: 'GUARANTOR',
            type: 'GUARANTEE',
          })
        );
      }
    });
  }

  list = list.concat(editDataSource);

  list.map(item => {
    if (item.key !== '0' && item.required) {
      selectedRowKeys.unshift(item.key);
    }
  });

  const guarantorPersonalBackup =
    (!_.isEmpty(nextProps.approveData.guarantorPersonal) &&
      _.cloneDeepWith(nextProps.approveData.guarantorPersonal.data)) ||
    [];
  const deductionAccountBackup = (!_.isEmpty(deductionAccount) && _.cloneDeepWith(deductionAccount)) || {};

  return {
    selectedRowKeys,
    dataSource: list,
    dataSourceBackup: dataSource,
    guarantorPersonalBackup,
    deductionAccountBackup,
    loanSettlementBackup: (loanSettlement && _.isArray(loanSettlement) && _.cloneDeepWith(loanSettlement)) || [],
  };
};

@connect(
  state => ({
    approveData: state.commercialLoans.approveData,
  }),
  {
    changeApproveData: values => ({ type: 'commercialLoans/changeApproveData', payload: values }),
  }
)
export default class SignContent extends React.Component {
  // static propTypes = {
  //   dataSource: PropTypes.array,
  //   editDataSource: PropTypes.array,
  //   dataSourceBackup: PropTypes.array,
  //   guarantorPersonalBackup: PropTypes.array,
  //   deductionAccountBackup: PropTypes.object,
  //   loanSettlementBackup: PropTypes.array,
  //   id: PropTypes.string,
  // };

  static defaultProps = {
    dataSource: [],
    dataSourceBackup: [],
    guarantorPersonalBackup: [],
    deductionAccountBackup: {},
    loanSettlementBackup: [],
    editDataSource: [],
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      !_.isEqual(nextProps.dataSource, prevState.dataSourceBackup) ||
      (nextProps.approveData.guarantorPersonal &&
        !_.isEqual(nextProps.approveData.guarantorPersonal.data, prevState.guarantorPersonalBackup)) ||
      (nextProps.approveData.deductionAccount &&
        !_.isEqual(nextProps.approveData.deductionAccount, prevState.deductionAccountBackup)) ||
      (nextProps.approveData.loanSettlement &&
        !_.isEqual(nextProps.approveData.loanSettlement, prevState.loanSettlementBackup))
    ) {
      return getStateData(nextProps, prevState);
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: formatMessage({ id: 'provide-guarantor-information' }),
        dataIndex: 'description',
        width: '70%',
        editable: true,
      },
      {
        title: formatMessage({ id: 'operation' }),
        dataIndex: 'operation',
        render: (text, record) => (
          <div>
            {record.isFirst ? (
              <div>
                <Button
                  type="primary"
                  onClick={() => {
                    this.handleAdd();
                  }}
                >
                  {formatMessage({ id: 'add-to' })}
                </Button>
              </div>
            ) : (
              <div>
                {record.fixed && record.fixed === 'unfixed' ? null : (
                  <div>
                    <Popconfirm
                      title={`${formatMessage({ id: 'delete-title' })}${record.description}${formatMessage({
                        id: 'what-are-the-conditions?',
                      })}`}
                      onConfirm={() => this.handleDelete(record.key)}
                      overlayClassName="commercial-loans-popconfirm"
                    >
                      <a>
                        <Icon type="delete" />
                      </a>
                    </Popconfirm>
                  </div>
                )}
              </div>
            )}
          </div>
        ),
      },
    ];
    this.state = {
      dataSource: [],
      dataSourceBackup: [],
      guarantorPersonalBackup: [],
      deductionAccountBackup: {},
      loanSettlementBackup: [],
      editDataSource: [],
      selectedRowKeys: [],
      list: [],
      sfk: [],
    };
  }

  componentDidMount() {
    this.saveData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(this.state.dataSource, prevState.dataSource)) {
      this.saveData();
    }
  }

  saveData = () => {
    const { changeApproveData } = this.props;
    changeApproveData && changeApproveData({ signConditionList: this.state.dataSource });
  };

  onSelectChange = keys => {
    const { dataSource } = this.state;
    this.setState({
      selectedRowKeys: keys,
      dataSource: dataSource.map(item => {
        if (keys.includes(item.key)) {
          return {
            ...item,
            required: true,
          };
        } else {
          return {
            ...item,
            required: false,
          };
        }
      }),
    });
  };

  focus = () => {
    this.textInput.focus();
  };

  handleDelete = key => {
    const { dataSource, editDataSource } = this.state;

    this.setState({
      dataSource: dataSource.filter(item => item.key !== key),
      editDataSource: editDataSource.filter(item => item.key !== key),
    });
  };

  handleAdd = () => {
    const { dataSource, selectedRowKeys } = this.state;
    const key = uuidv1();
    const newData = {
      key,
      code: key,
      description: formatMessage({ id: 'please-fill-in' }),
      type: 'CUSTOM',
      ownerType: 'BORROWER',
      required: true,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      selectedRowKeys: [key, ...selectedRowKeys],
    });
  };

  handleSave = row => {
    const { dataSource, editDataSource } = this.state;
    const index = dataSource.findIndex(item => row.key === item.key);
    const item = dataSource[index];

    dataSource.splice(index, 1, {
      ...item,
      ...row,
    });
    editDataSource.push(row);

    this.setState({
      dataSource,
      editDataSource,
    });
  };

  render() {
    const { dataSource, selectedRowKeys } = this.state;
    const rowSelection = {
      getCheckboxProps: record => {
        return {
          disabled:
            record.description === formatMessage({ id: 'add-rows' }) ||
            (record.from && record.from === 'db') ||
            record.type === 'GUARANTEE',
          defaultChecked: record.from && record.from === 'db',
        };
      },
      selectedRowKeys,
      onChange: selectedRowKeys => {
        this.onSelectChange(selectedRowKeys);
      },
    };
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
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const hashHeaderRow = dataSource.find(item => item.key === EmptyRow.key);
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={hashHeaderRow ? dataSource : [EmptyRow].concat(dataSource)}
          columns={columns}
          rowSelection={rowSelection}
          rowKey={record => record.key}
          showHeader={false}
          size="small"
        />
      </div>
    );
  }
}
