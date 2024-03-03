import numeral from 'numeral';

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

const weekFormat: { [key: number]: string } = {
	1: '星期一',
	2: '星期二',
	3: '星期三',
	4: '星期四',
	5: '星期五',
	6: '星期六',
	7: '星期天',
};

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

export { aspectRatios, pictureNotions, weekFormat };
