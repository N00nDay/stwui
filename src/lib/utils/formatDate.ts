const thisYearFormat: Intl.DateTimeFormatOptions = {
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: '2-digit',
	hour12: true
};

const lastYearOrOlderFormat: Intl.DateTimeFormatOptions = {
	year: '2-digit',
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: '2-digit',
	hour12: true
};

export function formatDate(date: Date) {
	const now = new Date();

	const msBetweenDates = Math.abs(date.getTime() - now.getTime());

	const minutesBetweenDates = msBetweenDates / (60 * 1000);
	const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
	const dateYear = date.getFullYear();
	const nowYear = date.getFullYear();

	if (hoursBetweenDates < 2) {
		return new Intl.RelativeTimeFormat('default', { style: 'long' }).format(
			minutesBetweenDates,
			'minutes'
		);
	} else if (hoursBetweenDates < 24) {
		return new Intl.RelativeTimeFormat('default', {
			style: 'long'
		}).format(hoursBetweenDates, 'hours');
	} else if (dateYear === nowYear) {
		return new Intl.DateTimeFormat('default', thisYearFormat).format(date);
	} else {
		return new Intl.DateTimeFormat('default', lastYearOrOlderFormat).format(date);
	}
}
