// 内容自动生成，请勿手动修改

import _7fd12923 from '~/pages/anti-fraud/anti-fraud-detail/index.tsx';
import _bc06a5cb from '~/pages/anti-fraud/anti-fraud-report/account/index.tsx';
import _368fb7ba from '~/pages/anti-fraud/anti-fraud-report/address/index';
import _89f337f9 from '~/pages/anti-fraud/anti-fraud-report/communication-detail/index.tsx';
import _92109a30 from '~/pages/anti-fraud/anti-fraud-report/device/index.tsx';
import _cde6ee68 from '~/pages/anti-fraud/anti-fraud-report/education/index';
import _1d52858b from '~/pages/anti-fraud/anti-fraud-report/job/index';
import _6c44418f from '~/pages/anti-fraud/anti-fraud-report/order/index.tsx';
import _37206337 from '~/pages/anti-fraud/anti-fraud-report/photos/index';
import _5a797f43 from '~/pages/anti-fraud/anti-fraud-report/telephone/index';
import _1ca04bcb from '~/pages/anti-fraud/anti-fraud-survey-detail/index.tsx';
import _55cd10c9 from '~/pages/anti-fraud/case-statistics/index.tsx';
import _de47069f from '~/pages/anti-fraud/fraud-blacklist/index';
import _b80bccab from '~/pages/anti-fraud/group-manage/index';
import _a5613cc from '~/pages/anti-fraud/index.tsx';
import _a0135cfe from '~/pages/anti-fraud/relation-chart-detail/index';
import _2dd72ec3 from '~/pages/basic.layout';
import _45ffa536 from '~/pages/basic/new-approvel-center/commercial-loans/index';
import _18c14cea from '~/pages/basic/new-approvel-center/commercial-loans/pages/image/index';
import _81c859c4 from '~/pages/basic/new-approvel-center/common/List/index';
import _b6806869 from '~/pages/basic/new-approvel-center/credit-approved-list/index';
import _c9c67cd from '~/pages/basic/new-approvel-center/credit-inquiry/search/index';
import _2c0cb604 from '~/pages/basic/new-approvel-center/fraud-survey/index.tsx';
import _5c7ffb9c from '~/pages/basic/new-approvel-center/index.tsx';
import _547f607c from '~/pages/basic/new-approvel-center/support-query/search/index';
import _b34b2e22 from '~/pages/basic/new-approvel-center/sx-approved-list/index';
import _256f985c from '~/pages/basic/search/order-info/index';
import _2f5cef53 from '~/pages/basic/search/order-search/index';
import _5efb3865 from '~/pages/error/index.tsx';
import _de353b9c from '~/pages/index.tsx';
import _aca9a890 from '~/pages/system-manage/authority-manage/index';
import _82a33587 from '~/pages/system-manage/index.tsx';
import _5b139368 from '~/pages/system-manage/project-configs/index.tsx';
import { lazy } from '~/utils/core';

const rootConfig = () => [
  {
    layout: _2dd72ec3,
    path: '/',
    children: [
      {
        name: '',
        path: '/',
        component: _de353b9c,
      },
      {
        name: '',
        path: '/403',
        component: _5efb3865,
      },
      {
        name: '',
        path: '/antiFraud',
        component: _a5613cc,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail',
        component: _7fd12923,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/account',
        component: _bc06a5cb,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/address',
        component: _368fb7ba,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/education',
        component: _cde6ee68,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/job',
        component: _1d52858b,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/order',
        component: _6c44418f,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/photos',
        component: _37206337,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/relationChartDetail',
        component: _a0135cfe,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudDetail/telephone',
        component: _5a797f43,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudSurveyDetail',
        component: _1ca04bcb,
      },
      {
        name: '',
        path: '/antiFraud/antiFraudSurveyDetail/:antiFraudSurveyPage',
        component: _1ca04bcb,
      },
      {
        name: '',
        path: '/antiFraud/caseStatistics',
        component: _55cd10c9,
      },
      {
        name: '',
        path: '/antiFraud/communication-detail/:ssn/:name/:phone',
        component: _89f337f9,
      },
      {
        name: '',
        path: '/antiFraud/fraudBlacklist',
        component: _de47069f,
      },
      {
        name: '',
        path: '/antiFraud/groupManage',
        component: _b80bccab,
      },
      {
        name: '',
        path: '/antiFraud/reportDevice',
        component: _92109a30,
      },
      {
        name: '',
        path: '/newApprovelCenter',
        component: _5c7ffb9c,
      },
      {
        name: '',
        path: '/newApprovelCenter/:routePath/detail',
        component: lazy(() => import(/* webpackChunkName: "newApproveDetail" */ '~/pages/basic/new-approvel-center/detail/index')),
      },
      {
        name: '',
        path: '/newApprovelCenter/:routerName/:applicationId',
        component: _81c859c4,
      },
      {
        name: '',
        path: '/newApprovelCenter/approvedList',
        component: _b6806869,
      },
      {
        name: '',
        path: '/newApprovelCenter/commercialLoans',
        component: _45ffa536,
      },
      {
        name: '',
        path: '/newApprovelCenter/commercialLoans/:commercialLoansPage',
        component: _45ffa536,
      },
      {
        name: '',
        path: '/newApprovelCenter/common',
        component: lazy(() => import(/* webpackChunkName: "newApprovelCommon" */ '~/pages/basic/new-approvel-center/common/index')),
      },
      {
        name: '',
        path: '/newApprovelCenter/creditInquiry',
        component: _c9c67cd,
      },
      {
        name: '',
        path: '/newApprovelCenter/fraudSurvey',
        component: _2c0cb604,
      },
      {
        name: '',
        path: '/newApprovelCenter/image',
        component: _18c14cea,
      },
      {
        name: '',
        path: '/newApprovelCenter/supportQuery',
        component: _547f607c,
      },
      {
        name: '',
        path: '/newApprovelCenter/sx-approvedList',
        component: _b34b2e22,
      },
      {
        name: '',
        path: '/search',
        component: _2f5cef53,
      },
      {
        name: '',
        path: '/search/orderinfo',
        component: _256f985c,
      },
      {
        name: '',
        path: '/systemManage',
        component: _82a33587,
      },
      {
        name: '',
        path: '/systemManage/authorityManage',
        component: _aca9a890,
      },
      {
        name: '',
        path: '/systemManage/v2/:tabName/:mode',
        component: _5b139368,
      },
      {
        name: '',
        path: '/systemManage/v2/:tabName/:mode/project/:projectId/id/:versionId/version/:versionIndex',
        component: _5b139368,
      },
    ],
  },
];

export default rootConfig;
