import dayjs, { type Dayjs } from 'dayjs';

export function getMonthDays(date: Dayjs): Dayjs[] {
	const monthLength = date.daysInMonth();
	const days: Dayjs[] = [];
	for (let i = 0; i < monthLength; i++) {
		days.push(date.add(i, 'days'));
	}
	return days;
}

export function getCalendarDays(value: Dayjs, weekStartsOn: number): Dayjs[] {
	const firstWeekday = dayjs(value).startOf('month');

	let days: Dayjs[] = [];

	const daysBefore = firstWeekday.subtract(weekStartsOn, 'days').add(7, 'days').day() % 7;
	if (daysBefore > 0) {
		days = getMonthDays(value.subtract(1, 'month').startOf('month')).slice(-daysBefore);
	}
	days = days.concat(getMonthDays(value.startOf('month')));

	// const daysAfter = 42 - days.length;
	const daysAfter = 35 - days.length;
	days = days.concat(getMonthDays(value.add(1, 'month').startOf('month')).slice(0, daysAfter));

	return days;
}
