import { formatMessage } from '~/locale-tools';
import fetch from 'dva/fetch';
import { handleNotSucessHttpCode } from './requestBase';
import { message } from 'antd';
import URL from '~/constants/url';

export const downloadFile = async fileUrl => {
  try {
    const URL = window.URL;
    const request = new Request(fileUrl);
    const response = await fetch(request, { mode: 'cors' });
    const blobUrl = window.URL.createObjectURL(await response.blob());
    const link = document.createElement('a');
    const fileName = fileUrl
      .split('/')
      .pop()
      .split('?')[0];
    link.href = blobUrl;
    link.download = decodeURI(fileName);
    link.click();
    URL.revokeObjectURL(blobUrl);
  } catch (err) { }
};
