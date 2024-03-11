import numeral from 'numeral';

const OFF_WORK = 'OFF_WORK'; // 下班时间卡片的配置字段

const aspectRatios = [
	{
		label: '1:1',
		value: 1,
	},
	{
		label: '4:3',
		value: divide(4, 3),
	},
	{
		label: '16:9',
		value: divide(16, 9),
	},
	{
		label: '16:10',
		value: divide(16, 10),
	},
	{
		label: '21:9',
		value: divide(21, 9),
	},
	{
		label: '32:9',
		value: divide(32, 9),
	},
];

const pictureNotions = '图片不会上传到服务器转换，而是在浏览器中执行。';

/**
 * 将num1除以num2并返回结果
 * @param {number} num1 - 被除数
 * @param {number} num2 - 除数
 * @returns {number} - 除法结果
 */
function divide(num1: number, num2: number): number {
	if (num2 === 0) {
		throw new Error('Cannot divide by zero');
	}
	console.log();
	return numeral(num1).divide(num2).format('0.1');
}

// 预定颜色
const predefineColors = ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585'];

export { aspectRatios, pictureNotions, predefineColors, OFF_WORK };
