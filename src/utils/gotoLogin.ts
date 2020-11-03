import { USER_LOGIN_URL } from '~/constants/constant';

export default () => {
  if (window.location.href.indexOf(USER_LOGIN_URL) === -1) {
    window.location.href = `${USER_LOGIN_URL}?returnUrl=${encodeURIComponent(window.location.href)}`;
  }
};
