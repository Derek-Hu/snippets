import { formatMessage } from '~/locale-tools';
import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Dropdown } from 'antd';
// import Logo from '~/styles/img/logo.png';
import { ROUTE_MENU_DIC } from '~/constants/constant';
import IntlSwitch from '~/components/intl-switch';
import './style.scss';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

const SECOND_PATH = ['approvelCenter', 'newApprovelCenter', 'postLoan'];

const MenuData = {
  newApprovelCenter: [
    {
      key: 'approvedList',
      label: formatMessage({ id: 'branch-audit' }),
      pathname: '/newApprovelCenter/approvedList',
    },
    {
      key: 'sx-approvedList',
      label: formatMessage({ id: 'credit-audit' }),
      pathname: '/newApprovelCenter/sx-approvedList',
    },
    {
      key: 'creditInquiry',
      label: formatMessage({ id: 'credit-inquiry' }),
      pathname: '/newApprovelCenter/creditInquiry',
    },
    {
      key: 'supportQuery',
      label: formatMessage({ id: 'branch-query' }),
      pathname: '/newApprovelCenter/supportQuery',
    },
    {
      key: 'fraudSurvey',
      label: formatMessage({ id: 'fraud-investigation' }),
      pathname: '/newApprovelCenter/fraudSurvey',
    },
  ],
  systemManage: [
    {
      key: 'projectManage',
      label: formatMessage({ id: 'project-management' }),
      pathname: '/systemManage',
    },
    // {
    //   key: 'authority',
    //   label: formatMessage({ id: 'account-authority' }),
    //   pathname: '/systemManage/authorityManage',
    // },
  ],
  antiFraud: [
    {
      key: 'antiFraud',
      label: formatMessage({ id: 'anti-fraud-inquiry' }),
      pathname: '/antiFraud',
    },
    {
      key: 'groupManage',
      label: formatMessage({ id: 'gang-management' }),
      pathname: '/antiFraud/groupManage',
    },
    {
      key: 'fraudBlacklist',
      label: formatMessage({ id: 'anti-fraud-list-management' }),
      pathname: '/antiFraud/fraudBlacklist',
    },
    {
      key: 'caseStatistics',
      label: formatMessage({ id: 'case-statistics' }),
      pathname: '/antiFraud/caseStatistics',
    },
  ],
};

export default props => {
  const { history, selectedKeys, userInfo, userMenu } = props;
  let selectKey = selectedKeys;

  if (SECOND_PATH.indexOf(selectKey) !== -1) {
    const pathArray = history.location.pathname.split('/');
    selectKey = pathArray.length > 2 ? pathArray[2] : 'coreComponey';
  }

  const customMenu = userMenu.map(item => {
    const key = ROUTE_MENU_DIC[item.code];
    const subMenus = MenuData[key];
    if (subMenus) {
      return (
        <SubMenu title={formatMessage({ id: `menu-${item.code}` }) || item.name} key={key}>
          {subMenus.map(sub => (
            <Menu.Item key={sub.key}>
              <Link to={{ pathname: sub.pathname }}>{sub.label}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={key}>
        <Link to={{ pathname: `/${key}` }}>{formatMessage({ id: `menu-${item.code}` })}</Link>
      </Menu.Item>
    );
  });

  return (
    <Header className="rc-header">
      <div onClick={() => history.push('/')} className="rc-header-logo">
        {/* <img alt="" src={Logo} />
        <div className="login-seperator" /> */}
        <h1>{formatMessage({ id: 'wind-control-center' })}</h1>
      </div>
      <div className="rc-header-menu">
        <Menu selectedKeys={[selectKey]} mode="horizontal" style={{ fontSize: 18 }}>
          {customMenu}
        </Menu>
        <div className="rc-header-user">
          {formatMessage({ id: 'welcome' })}
          {userInfo.name ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>
                    <a onClick={props.logout}>{formatMessage({ id: 'sign-out' })}</a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a className="rc-dropdown-link">{userInfo.name}</a>
            </Dropdown>
          ) : null}
        </div>
        <IntlSwitch />
      </div>
    </Header>
  );
};
