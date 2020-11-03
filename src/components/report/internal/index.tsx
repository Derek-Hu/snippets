import React from 'react';
import { formatMessage } from '~/locale-tools';
import { Table, Modal } from 'antd';
import { DATE_FOMATE } from '~/constants/constant';
import { numberFormat } from '~/utils/numberFormat';
import TogglePanel from '~/components/toggle-panel';
import { commercialMatchLoan } from '~/codegen/service/ts/HitMatchService';
import ColumnConvert from '~/utils/column-convert';
import { formatTime } from '~/utils/time';
import { IMatchLoanVo } from '~/codegen/service/types/IMatchLoanVo';
import { IRepaymentDetailVo } from '~/codegen/service/types/IRepaymentDetailVo';
import { expandedRowRender, rowClassName } from '~/components/manage-fee/index';

interface IProps {
  creditReviewOrderId: number;
}

type MatchItem = {
  title: string;
  type?: string;
  info: IMatchLoanVo[];
};
interface IState {
  visible?: boolean;
  repaymentDetail?: IRepaymentDetailVo[];
  allMatchSections: MatchItem[];
}
export default class Internal extends React.Component<IProps, IState> {
  creditReviewOrderId = this.props.creditReviewOrderId;
  state = {
    repaymentDetail: [],
    allMatchSections: [
      {
        title: formatMessage({ id: 'borrow-or-lend-money' }),
        info: [],
        type: 'self',
      },
      {
        title: formatMessage({ id: 'liaison-man-credit-statistics-of' }),
        info: [],
      },
      {
        title: formatMessage({ id: 'enterprise-matching' }),
        info: [],
        type: 'noself',
      },
    ],
    visible: false,
  };

  tableColumns = ColumnConvert<IMatchLoanVo, { operation: string }>({
    column: {
      request: formatMessage({ id: 'matching-content' }),
      loanStatus: formatMessage({ id: 'borrowing-state' }),
      loanBaseId: formatMessage({ id: 'loan-application-no-1' }),
      relation: formatMessage({ id: 'correlation' }),
      name: formatMessage({ id: 'name-of-borrower' }),
      productType: formatMessage({ id: 'product-type' }),
      applyTime: formatMessage({ id: 'application-time' }),
      applyAmount: formatMessage({ id: 'application-amount' }),
      amountDate: formatMessage({ id: 'lending-time' }),
      amount: formatMessage({ id: 'loan-amount' }),
      unclearedPrincipal: formatMessage({ id: 'remaining-outstanding-principal' }),
      daysRemaining: formatMessage({ id: 'days-remaining' }),
      operation: formatMessage({ id: 'operation' }),
    },
    attributes: {
      operation: {
        fixed: 'right',
      },
    },
    render: (value, key, record) => {
      switch (key) {
        case 'amountDate':
        case 'applyTime':
          return formatTime(value, DATE_FOMATE);
        case 'amount':
        case 'applyAmount':
        case 'unclearedPrincipal':
          return numberFormat(value);
        case 'daysRemaining':
          return <span style={value < 0 ? { color: 'red', fontWeight: 'bold' } : {}}>{value}</span>;
        case 'operation':
          return (
            <a onClick={() => this.showModal(record)} style={{ color: '#2acd8f' }}>
              {formatMessage({ id: 'details-of-repayment' })}
            </a>
          );
        default:
          return value;
      }
    },
  });

  modalTableColumns = ColumnConvert<IRepaymentDetailVo>({
    column: {
      dueDate: formatMessage({ id: 'due-date' }),
      totalAmount: formatMessage({ id: 'total-receivables' }),
      repaymentDate: formatMessage({ id: 'actual-repayment-date' }),
      repaymentAmount: formatMessage({ id: 'actual-receivables' }),
      // managefee: formatMessage({ id: 'monthly-management-fee' }),
    },
    render(value, key) {
      switch (key) {
        case 'dueDate':
        case 'repaymentDate':
          return formatTime(value, DATE_FOMATE);
        case 'totalAmount':
        case 'repaymentAmount':
          // case 'managefee':
          return numberFormat(value);
        default:
          return value;
      }
    },
  });

  showModal = (record: IMatchLoanVo) => {
    this.setState({
      visible: true,
      repaymentDetail: record.repaymentDetail,
    });
  };
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount = async () => {
    const res = await commercialMatchLoan({ creditReviewOrderId: this.creditReviewOrderId });
    if (res && res.result) {
      this.setState(({ allMatchSections }) => {
        allMatchSections[0].info = res.result.matchLoanInfos || [];
        allMatchSections[1].info = res.result.contactMatchLoanInfos || [];
        allMatchSections[2].info = res.result.companyMatchLoanInfos || [];
        return {
          allMatchSections,
        };
      });
    }
  };

  render() {
    let { allMatchSections, repaymentDetail, visible } = this.state;
    return (
      <div>
        {allMatchSections.map((item, index) => (
          <TogglePanel title={item.title} key={index}>
            <Table
              columns={this.tableColumns}
              dataSource={item.info}
              scroll={{ x: 1810 }}
              pagination={false}
              rowKey={(record: IMatchLoanVo, index) => `${record.loanBaseId || ''}-${index}`}
            />
          </TogglePanel>
        ))}
        <Modal
          title={formatMessage({ id: 'details-of-repayment' })}
          width={1200}
          visible={visible}
          footer={null}
          onCancel={this.closeModal}
        >
          <Table
            columns={this.modalTableColumns}
            dataSource={repaymentDetail}
            pagination={false}
            rowClassName={rowClassName}
            // expandIconColumnIndex={}
            expandedRowRender={expandedRowRender}
          />
        </Modal>
      </div>
    );
  }
}
