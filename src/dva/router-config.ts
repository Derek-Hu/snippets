// 内容自动生成，请勿手动修改

import _49ef6dd1 from '~/pages/anti-fraud/anti-fraud-detail/index';
import _d4f5f10e from '~/pages/anti-fraud/anti-fraud-report/account/index';
import _22cbc0dc from '~/pages/anti-fraud/anti-fraud-report/address/index';
import _44f8a2c1 from '~/pages/anti-fraud/anti-fraud-report/communication-detail/index';
import _ae7bc7b3 from '~/pages/anti-fraud/anti-fraud-report/device/index';
import _a75b7d71 from '~/pages/anti-fraud/anti-fraud-report/education/index';
import _de6e7207 from '~/pages/anti-fraud/anti-fraud-report/job/index';
import _631eaddf from '~/pages/anti-fraud/anti-fraud-report/order/index';
import _982f2b73 from '~/pages/anti-fraud/anti-fraud-report/photos/index';
import _8f51121c from '~/pages/anti-fraud/anti-fraud-report/telephone/index';
import _46278ba4 from '~/pages/anti-fraud/anti-fraud-survey-detail/index';
import _4c650652 from '~/pages/anti-fraud/case-statistics/index';
import _dfa6f379 from '~/pages/anti-fraud/fraud-blacklist/index';
import _ce54d700 from '~/pages/anti-fraud/group-manage/index';
import _b8cb0da3 from '~/pages/anti-fraud/index';
import _d962eb7a from '~/pages/anti-fraud/relation-chart-detail/index';
import _6d2676e2 from '~/pages/basic.layout';
import _64f81c3a from '~/pages/basic/new-approvel-center/commercial-loans/index';
import _3d6fd8b8 from '~/pages/basic/new-approvel-center/commercial-loans/pages/image/index';
import _78caa5b8 from '~/pages/basic/new-approvel-center/credit-approved-list/index';
import _34efc2cb from '~/pages/basic/new-approvel-center/credit-inquiry/search/index';
import _8506adba from '~/pages/basic/new-approvel-center/fraud-survey/index';
import _23879e40 from '~/pages/basic/new-approvel-center/index';
import _aab8e492 from '~/pages/basic/new-approvel-center/support-query/search/index';
import _e941dfe2 from '~/pages/basic/new-approvel-center/sx-approved-list/index';
import _8a87edc4 from '~/pages/basic/search/order-info/index';
import _4b0b54c5 from '~/pages/basic/search/order-search/index';
import _e99a0562 from '~/pages/error/index';
import _72ea572a from '~/pages/index';
import _875599af from '~/pages/system-manage/authority-manage/index';
import _481d18be from '~/pages/system-manage/index';
import _9ea182ca from '~/pages/system-manage/project-configs/index';
import _81c859c4 from '~/pages/basic/new-approvel-center/common/List/index';
import { lazy } from '~/utils/core';

export interface IRouteChild {
  name: string;
  path: string;
  component: React.ComponentClass<any> | React.FC;
}
export interface IRouteItem {
  layout: React.ComponentClass<any>;
  path: string;
  children: Array<IRouteChild>;
}
const rootConfig: IRouteItem[] = [
  {
    layout: _6d2676e2,
    path: '/',
    children: [
      {
        name: '',
        path: '/',
        component: _72ea572a,
      },
      {
        name: '',
        path: '/403',
        component: _e99a0562,
      },
      {
        name: 'A-FC',
        path: '/antiFraud',
        component: _b8cb0da3,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail',
        component: _49ef6dd1,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/account',
        component: _d4f5f10e,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/address',
        component: _22cbc0dc,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/education',
        component: _a75b7d71,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/job',
        component: _de6e7207,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/order',
        component: _631eaddf,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/photos',
        component: _982f2b73,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/relationChartDetail',
        component: _d962eb7a,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/telephone',
        component: _8f51121c,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudSurveyDetail',
        component: _46278ba4,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudSurveyDetail/:antiFraudSurveyPage',
        component: _46278ba4,
      },
      {
        name: '',
        path: '/antiFraud/caseStatistics',
        component: _4c650652,
      },
      {
        name: '',
        path: '/antiFraud/communication-detail/:ssn/:name/:phone',
        component: _44f8a2c1,
      },
      {
        name: '',
        path: '/antiFraud/fraudBlacklist',
        component: _dfa6f379,
      },
      {
        name: '',
        path: '/antiFraud/groupManage',
        component: _ce54d700,
      },
      {
        name: '',
        path: '/antiFraud/reportDevice',
        component: _ae7bc7b3,
      },
      {
        name: '',
        path: '/newApprovelCenter',
        component: _23879e40,
      },
      {
        name: '',
        path: '/newApprovelCenter/:routePath/detail',
        component: lazy(() =>
          import(/* webpackChunkName: "newApproveDetail" */ '~/pages/basic/new-approvel-center/detail/index')
        ),
      },
      {
        name: '',
        path: '/newApprovelCenter/approvedList',
        component: _78caa5b8,
      },
      {
        name: '',
        path: '/newApprovelCenter/commercialLoans',
        component: _64f81c3a,
      },
      {
        name: '',
        path: '/newApprovelCenter/commercialLoans/:commercialLoansPage',
        component: _64f81c3a,
      },
      {
        name: '',
        path: '/newApprovelCenter/common',
        component: lazy(() =>
          import(/* webpackChunkName: "newApprovelCommon" */ '~/pages/basic/new-approvel-center/common/index')
        ),
      },
      {
        name: '',
        path: '/newApprovelCenter/creditInquiry',
        component: _34efc2cb,
      },
      {
        name: '',
        path: '/newApprovelCenter/fraudSurvey',
        component: _8506adba,
      },
      {
        name: '',
        path: '/newApprovelCenter/image',
        component: _3d6fd8b8,
      },
      {
        name: '',
        path: '/newApprovelCenter/supportQuery',
        component: _aab8e492,
      },
      {
        name: '',
        path: '/newApprovelCenter/sx-approvedList',
        component: _e941dfe2,
      },
      {
        name: '',
        path: '/search',
        component: _4b0b54c5,
      },
      {
        name: '',
        path: '/search/orderinfo',
        component: _8a87edc4,
      },
      {
        name: '',
        path: '/systemManage',
        component: _481d18be,
      },
      {
        name: '',
        path: '/systemManage/authorityManage',
        component: _875599af,
      },
      {
        name: '',
        path: '/systemManage/v2/:tabName/:mode',
        component: _9ea182ca,
      },
      {
        name: '',
        path: '/systemManage/v2/:tabName/:mode/project/:projectId/id/:versionId/version/:versionIndex/:isExamining?',
        component: _9ea182ca,
      },
      {
        name: '',
        path: '/newApprovelCenter/:routerName/:applicationId',
        component: _81c859c4,
      },
    ],
  },
];

export default rootConfig;
