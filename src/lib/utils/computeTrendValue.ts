export default function computeTrendValue(current: number, comparison: number | undefined) {
	return !comparison ? current : current - comparison;
}
