import { formatTime } from '~/utils/time';

test('URL支持金融云环境', () => {
  const time = new Date();
  expect(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(formatTime(time)));
  expect(/^\d{4}-\d{2}-\d{2}$/.test(formatTime(time, 'YYYY-MM-DD')));
});
