export default function percentFormatter(value: number, digits: 0 | 1 | 2 = 0) {
	const newVal = (Math.round(value * 10) / 10).toFixed(digits) + '%';
	return newVal;
}
