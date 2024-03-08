import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import dayOfYear from 'dayjs/plugin/dayOfYear';
dayjs.extend(dayOfYear); // 一年第几天
dayjs.extend(weekOfYear); // 一年第几周
dayjs.extend(weekday); // 星期
dayjs.extend(isToday); // 今天
dayjs.extend(isTomorrow); // 明天

const weekFormat: { [key: number]: string } = {
	1: '星期一',
	2: '星期二',
	3: '星期三',
	4: '星期四',
	5: '星期五',
	6: '星期六',
	7: '星期天',
};

export function useDateFormat() {
	const curDate = new Date();
	function isToday(date = curDate) {
		return dayjs(date).isToday();
	}
	function isTomorrow(date = curDate) {
		return dayjs(date).isTomorrow();
	}
	function weekDay(date = curDate): number {
		return dayjs(date).weekday();
	}
	function format(date = curDate, format = 'YYYY-MM-DD HH:mm:ss') {
		return dayjs(date).format(format);
	}
	function formatWeek(num = weekDay()): string {
		return weekFormat[num];
	}
	function dayOfYear(date = curDate) {
		return dayjs(date).dayOfYear();
	}
	function week(date = curDate) {
		return dayjs(date).week();
	}
	return {
		isToday,
		isTomorrow,
		weekDay,
		format,
		formatWeek,
		dayOfYear,
		week,
		dayjs,
	};
}
