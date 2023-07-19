import { writable } from 'svelte/store';

interface IBreakPoints {
	xs: boolean;
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
	'2xl': boolean;
}

const breakpointsDefault: IBreakPoints = {
	xs: true,
	sm: true,
	md: true,
	lg: true,
	xl: true,
	'2xl': true
};

const breakpoints = writable<IBreakPoints>(breakpointsDefault);

export default breakpoints;
