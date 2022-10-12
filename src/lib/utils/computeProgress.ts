export default function computeProgress(value: number, goal = 100) {
	return !goal || goal === 0 ? 100 : (value / goal) * 100;
}
