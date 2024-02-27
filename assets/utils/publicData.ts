import numeral from 'numeral';

const aspectRatios = [
	{
		label: '1:1',
		value: 1,
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
		label: '17:9',
		value: numeral(17).divide(9).value(),
	},
];

export { aspectRatios };
