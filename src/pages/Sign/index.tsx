import React, { Component } from 'react';
import EditableCell from './cell-editable';
import ReadCell from '~/pages/basic/new-approvel-center/common/Sign/cell-read';
import { signCondition } from '~/codegen/service/ts/ApproveCenterService';
import { formatMessage } from '~/locale-tools';
import { ISignCondition } from '~/codegen/service/types/ISignCondition';
import DetailPanel from '~/components/detail-pannel/index';

interface IProps {
  creditReviewOrderId: number;
  nodeId: string;
  startTime: number;
  endTime: number;
  reviewModules: any[];
  editable: boolean;
}

interface IState {
  loading: boolean;
  conditionData: ISignCondition[];
}
export default class Sign extends Component<IProps, IState> {
  state: IState = {
    conditionData: [],
    loading: true,
  };

  async componentDidMount() {
    const { creditReviewOrderId, nodeId, startTime, endTime } = this.props;
    const params = {
      nodeId,
      latest: true,
      startTime,
      endTime,
    };
    try {
      const res = await signCondition({ creditReviewOrderId }, params);
      this.setState({
        conditionData: res.result,
      });
    } catch (e) {}

    this.setState({
      loading: false,
    });
  }

  render() {
    const { conditionData, loading } = this.state;
    const { editable, reviewModules, creditReviewOrderId } = this.props;

    if (loading) {
      return <div />;
    }

    return (
      <DetailPanel title={formatMessage({ id: 'contract-conditions' })}>
        {editable ? (
          <EditableCell reviewModules={reviewModules} id={creditReviewOrderId} dataSource={conditionData || []} />
        ) : (
          <ReadCell dataSource={conditionData || []} />
        )}
      </DetailPanel>
    );
  }
}
