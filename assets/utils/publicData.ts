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
		value: numeral(16).divide(9).value(),
	},
	{
		label: '16:10',
		value: numeral(16).divide(10).value(),
	},
	{
		label: '21:9',
		value: numeral(21).divide(9).value(),
	},
	{
		label: '32:9',
		value: numeral(32).divide(9).value(),
	},
];

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
	return Math.round(num1 / num2);
}

export { aspectRatios };
