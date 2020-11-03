import moment from 'moment';

const twoWeekDays = 7 * 1;
const currentDate = moment();
const lastTwoWeeks = moment().subtract(twoWeekDays, 'days');

export default [lastTwoWeeks, currentDate];
