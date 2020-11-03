import URL from '~/constants/url';
import { formatMessage, CURRENT_LANGUAGE } from '~/locale-tools';
import fetch from 'dva/fetch';
import { notification, message } from 'antd';
import { UNIAUTH_RESPONSE_TO_TEXT } from '~/constants/constant';
import _ from 'lodash';

import gotoLogin from '~/utils/gotoLogin';

notification.config({ duration: 1 });

const languageMap = {
  en: 'en-US',
  'en-US': 'en-US',
  zh: 'zh-CN',
  'zh-CN': 'zh-CN',
  th: 'th',
};

const ErrorCodeMessage = {
  400: formatMessage({ id: 'parameter-error' }),
  403: formatMessage({ id: 'im-sorry-function-operate-limits-of-authority' }),
  404: formatMessage({ id: 'resource-does-not-exist' }),
  405: formatMessage({ id: 'request-method-error' }),
  500: formatMessage({ id: 'server-exception' }),
};

export const handleNotSucessHttpCode = code => {
  if (code === 401) {
    window.location.href = `${window.location.origin + window.location.pathname}#/403`;
    return;
  }
  return ErrorCodeMessage[code] || formatMessage({ id: 'server-exception' });
};

function generateBase(apiBase, isCodegen) {
  return async function base(url, options, hideErrorMsg) {
    let urlParmas;
    let configs;
    if (!isCodegen) {
      const { headers: customHeades, data, body, bodyTransformed, ...customOption } = options || {};
      urlParmas = data;
      configs = {
        credentials: 'include',
        ...customOption,
        body: bodyTransformed ? body : JSON.stringify(body),
        headers: {
          // Accept: 'application/json, text/javascript, */*;',
          'Content-Type': 'application/json; charset=utf-8',
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Request-Headers': 'origin, content-type, accept',
          'Accept-Language': languageMap[CURRENT_LANGUAGE],
          // 'local': navigator.language || 'en-US'
          ...customHeades,
        },
      };
    } else {
      const { headers: customHeades, params, data, ...customOption } = options || {};
      urlParmas = params;
      configs = {
        credentials: 'include',
        ...customOption,
        body: JSON.stringify(data),
        headers: {
          // Accept: 'application/json, text/javascript, */*;',
          'Content-Type': 'application/json; charset=utf-8',
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Request-Headers': 'origin, content-type, accept',
          'Accept-Language': languageMap[CURRENT_LANGUAGE],
          // 'local': navigator.language || 'en-US'
          ...customHeades,
        },
      };
    }

    const search = _.isUndefined(urlParmas)
      ? ''
      : (/\?/.test(url) ? '&' : '?') +
        Object.keys(urlParmas)
          .filter(key => !_.isUndefined(urlParmas[key]) && _.trim(urlParmas[key]))
          .map(key => key + '=' + urlParmas[key])
          .join('&');

    return fetch(apiBase + url + search, configs)
      .then(
        async response => {
          const isHttpSuccess = response.status >= 200 && response.status < 300;
          if (!isHttpSuccess) {
            return Promise.reject(handleNotSucessHttpCode(response.status));
          }

          const xSizeHeader = response.headers.get('X-Size');
          const xSize = _.isNull(xSizeHeader) ? null : { total: parseInt(xSizeHeader, 10) };

          let bodyText;
          let body;
          try {
            bodyText = await response.text();
            if (bodyText !== undefined && bodyText !== null) {
              body = JSON.parse(bodyText);
            }
          } catch (error) {
            console.error(error, bodyText);
            return {
              result: bodyText,
              ...xSize,
            };
          }

          if (!body) {
            return {
              result: null,
              ...xSize,
            };
          }

          if (Object.prototype.toString.call(body) === '[object Object]') {
            const isUniauthLogin =
              body.info &&
              Array.isArray(body.info) &&
              _.find(body.info, item => {
                return item.name === 'LOGIN_REDIRECT_URL' && item.msg !== '/';
              });
            if (isUniauthLogin) {
              gotoLogin();
              return;
            }
            if ('code' in body && 'status' in body) {
              if (body.status === 'fail') {
                return Promise.reject(body.user_message || body.message || formatMessage({ id: 'server-exception' }));
              }

              if (body.code !== 200) {
                if (body.code === 400) {
                  return Promise.reject(formatMessage({ id: 'parameter-error' }));
                }
                return Promise.reject(UNIAUTH_RESPONSE_TO_TEXT[body.code] || formatMessage({ id: 'server-exception' }));
              }
            }
          }
          return {
            result: body,
            ...xSize,
          };
        },
        () => {
          return Promise.reject(formatMessage({ id: 'network-issue' }));
        }
      )
      .catch(e => {
        if (!hideErrorMsg && e) {
          message.warning(e);
        }
        console.error(e);
        return Promise.reject(e);
      });
  };
}
export const rbmsBase = generateBase(URL.apiBase);

export const rbmsCodegen = generateBase(URL.apiBase, true);

export const uniAuthBase = generateBase(URL.uniauth);
