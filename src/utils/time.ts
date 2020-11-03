import moment from 'moment';

export const DEFAULt_FOMATE = 'YYYY-MM-DD HH:mm:ss';

export const formatTime = (time?: number, format?: string) => {
  return time ? moment(time).format(format || DEFAULt_FOMATE) : '';
};
