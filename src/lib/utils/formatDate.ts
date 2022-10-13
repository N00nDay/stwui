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

export default function formatDate(date: Date) {
	const now = new Date();

	const msBetweenDatesNonAbs = date.getTime() - now.getTime();
	const negative = msBetweenDatesNonAbs < 0;
	const msBetweenDates = Math.abs(date.getTime() - now.getTime());

	let minutesBetweenDates = msBetweenDates / (60 * 1000);
	let hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
	const dateYear = date.getFullYear();
	const nowYear = now.getFullYear();

	if (hoursBetweenDates < 2) {
		if (negative) minutesBetweenDates = minutesBetweenDates * -1;
		return new Intl.RelativeTimeFormat('default', { style: 'long' }).format(
			minutesBetweenDates,
			'minutes'
		);
	} else if (hoursBetweenDates < 24) {
		if (negative) hoursBetweenDates = hoursBetweenDates * -1;
		return new Intl.RelativeTimeFormat('default', {
			style: 'long'
		}).format(hoursBetweenDates, 'hours');
	} else if (dateYear === nowYear) {
		return new Intl.DateTimeFormat('default', thisYearFormat).format(date);
	} else {
		return new Intl.DateTimeFormat('default', lastYearOrOlderFormat).format(date);
	}
}
