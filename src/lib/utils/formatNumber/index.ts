interface Formatter {
	notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
	maximumFractionDigits?: number;
	minimumFractionDigits?: number;
	style?: 'decimal' | 'currency' | 'percent' | 'unit';
}

export default function formatNumber(
	number: number,
	{
		notation = 'standard',
		style = 'decimal',
		minimumFractionDigits = undefined,
		maximumFractionDigits = undefined
	}: Formatter
) {
	const formatter = Intl.NumberFormat('en-US', {
		notation,
		currency: style === 'currency' ? 'USD' : undefined,
		style,
		minimumFractionDigits: minimumFractionDigits
			? minimumFractionDigits
			: style === 'currency'
				? 2
				: minimumFractionDigits,
		maximumFractionDigits: maximumFractionDigits
			? maximumFractionDigits
			: style === 'currency'
				? 2
				: maximumFractionDigits
	});
	return formatter.format(number);
}
