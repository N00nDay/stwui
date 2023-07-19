import dayjs from 'dayjs';

export type Locale = {
	weekdays?: string[];
	months?: string[];
	weekStartsOn?: number;
};
type InnerLocale = {
	weekdays: string[];
	months: string[];
	weekStartsOn: number;
};

export function getLocaleDefaults(): InnerLocale {
	return {
		weekdays: [
			dayjs().day(0).format('dd'),
			dayjs().day(1).format('dd'),
			dayjs().day(2).format('dd'),
			dayjs().day(3).format('dd'),
			dayjs().day(4).format('dd'),
			dayjs().day(5).format('dd'),
			dayjs().day(6).format('dd')
		],
		months: [
			dayjs().month(0).format('MMMM'),
			dayjs().month(1).format('MMMM'),
			dayjs().month(2).format('MMMM'),
			dayjs().month(3).format('MMMM'),
			dayjs().month(4).format('MMMM'),
			dayjs().month(5).format('MMMM'),
			dayjs().month(6).format('MMMM'),
			dayjs().month(7).format('MMMM'),
			dayjs().month(8).format('MMMM'),
			dayjs().month(9).format('MMMM'),
			dayjs().month(10).format('MMMM'),
			dayjs().month(11).format('MMMM')
		],
		weekStartsOn: 0
	};
}
export function getInnerLocale(locale: Locale = {}): InnerLocale {
	const innerLocale = getLocaleDefaults();
	if (typeof locale.weekStartsOn === 'number') {
		innerLocale.weekStartsOn = locale.weekStartsOn;
	}
	if (locale.months) innerLocale.months = locale.months;
	if (locale.weekdays) innerLocale.weekdays = locale.weekdays;
	return innerLocale;
}

type DateFnsLocale = {
	options?: {
		weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	};
	localize?: {
		month: (n: number, options?: { width?: string }) => string;
		day: (i: number, options?: { width?: string }) => string;
	};
};
/** Create a Locale from a date-fns locale */
export function localeFromDateFnsLocale(dateFnsLocale: DateFnsLocale): InnerLocale {
	const locale = getLocaleDefaults();
	if (typeof dateFnsLocale?.options?.weekStartsOn === 'number') {
		locale.weekStartsOn = dateFnsLocale.options.weekStartsOn;
	}
	if (dateFnsLocale.localize) {
		for (let i = 0; i < 7; i++) {
			// widths: narrow, short, abbreviated, wide, any
			locale.weekdays[i] = dateFnsLocale.localize.day(i, { width: 'short' });
		}

		for (let i = 0; i < 12; i++) {
			locale.months[i] = dateFnsLocale.localize.month(i, { width: 'wide' });
		}
	}
	return locale;
}
