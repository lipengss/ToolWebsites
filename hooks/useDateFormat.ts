import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
dayjs.extend(weekday);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);

export function useDateFormat() {
	function isToday(date: string) {
		return dayjs(date).isToday();
	}
	function isTomorrow(date: string) {
		return dayjs(date).isTomorrow();
	}
	function weekDay(date: string) {
		return dayjs(date).weekday();
	}
	function format(date: string, format = 'YYYY-MM-DD HH:mm:ss') {
		return dayjs(date).format(format);
	}
	return {
		isToday,
		isTomorrow,
		weekDay,
		format,
		dayjs,
	};
}
