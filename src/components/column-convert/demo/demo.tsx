import { formatMessage } from '~/locale-tools';
import { formatTime } from '~/utils/time';
import { IGroupDeviceVo } from '~/codegen/service/types/IGroupDeviceVo';

const deviceColumns = ColumnConvert<IGroupDeviceVo, { '': any }>({
  column: {
    '': '#',
    deviceId: formatMessage({ id: 'device-number' }),
    os: formatMessage({ id: 'equipment-type' }),
    count: formatMessage({ id: 'times-of-acquisition' }),
    fistDateTime: formatMessage({ id: 'earliest-acquisition-time' }),
    lastDateTime: formatMessage({ id: 'latest-acquisition-time' }),
  },
  attributes: {
    '': {
      width: 80,
    },
    deviceId: {
      width: 300,
    },
    os: {
      width: 150,
    },
    count: {
      width: 150,
    },
  },
  render(value, key, record, instance, index) {
    switch (key) {
      case '':
        return index! + 1;
      case 'fistDateTime':
      case 'lastDateTime':
        return formatTime(value);
      default:
        return value;
    }
  },
});
