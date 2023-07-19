export default function computeTrendPercent(current: number, comparison: number | undefined) {
	const trendValue = !comparison ? current : current - comparison;
	return !comparison || comparison === 0 ? 100 : trendValue / comparison;
}
