export function validateSlots(
	slots: Record<string, boolean>,
	available: string[],
	component: string
) {
	for (const [key] of Object.entries(slots)) {
		if (!available.includes(key)) {
			let availableString = '';
			for (const [i, value] of available.entries()) {
				if (i + 1 === available.length) {
					availableString += ` and "${value}"`;
				} else {
					availableString += ` "${value}",`;
				}
			}

			throw Error(
				`${key} is not a valid slot. The only slots available for ${component} are${availableString}.`
			);
		}
	}
}
