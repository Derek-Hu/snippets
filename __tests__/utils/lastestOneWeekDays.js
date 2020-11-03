import timeRange from '~/utils/lastestOneWeekDays';

test('7天时间', () => {
  const [start, end] = timeRange;
  expect(`${end.subtract(7, 'days')}` === `${start}`).toBe(true);
});
