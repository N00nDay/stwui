/**
 * @param {number} size
 * @param {import('./types').Length} min
 * @param {import('./types').Length} max
 * @param {import('./types').Length} pos
 * @param {'min' | 'max'} priority
 * @returns {import('./types').Length}
 */
export function constrain(size, min, max, pos, priority) {
	let min_px = parseFloat(min);
	let max_px = parseFloat(max);
	let pos_px = parseFloat(pos);

	if (min.endsWith('%')) min_px = (size * min_px) / 100;
	if (max.endsWith('%')) max_px = (size * max_px) / 100;
	if (pos.endsWith('%')) pos_px = (size * pos_px) / 100;

	if (min_px < 0) min_px += size;
	if (max_px < 0) max_px += size;

	pos_px =
		priority === 'min'
			? Math.max(min_px, Math.min(max_px, pos_px))
			: Math.min(max_px, Math.max(min_px, pos_px));

	/** @type {import('./types').Length} */
	const position = pos.endsWith('%') ? (size ? `${(100 * pos_px) / size}%` : '0%') : `${pos_px}px`;

	return position;
}
