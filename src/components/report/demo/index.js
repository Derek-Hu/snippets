import { formatMessage } from '~/locale-tools';
import React from 'react';
import qs from 'query-string';
import { message } from 'antd';
import ReportCore from '~/components/report/core';
import { getEducationDataReports } from '~/services/anti-fraud';
import reportSettings from './report-settings';
import Controller from 'meta.macro';

@Controller('/antiFraud/antiFraudDetail/education')
export default class EducationDataReports extends React.Component {
  state = {
    loading: false,
  };

  urlParams = qs.parse(this.props.history.location.search);

  componentDidMount = async () => {
    const { ssn, uid, iid, name, phone } = this.urlParams;

    this.setState({
      loading: true,
    });

    let reportResponse;
    try {
      reportResponse = await getEducationDataReports({ ssn, uid, iid, name, phone });
    } catch (e) {
      console.log(e);
      message.error(formatMessage({ id: 'gain-be-defeated' }));
    }
    this.setState({
      loading: false,
    });

    if (!reportResponse || !reportResponse.result) {
      return;
    }

    const reportData = reportResponse.result && reportResponse.result.userFillEducation;

    reportData.forEach(item => {
      item.highestEdu = (item.highestEduFlag && item.degree) || '';
    });

    this.setState({
      report: reportData,
    });
  };

  render() {
    const { report } = this.state;

    return (
      <div className="afc-education-data">
        <ReportCore config={reportSettings} report={{ report }} />
      </div>
    );
  }
}
