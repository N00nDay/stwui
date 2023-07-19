import { BROWSER } from 'esm-env';
import { writable } from 'svelte/store';

const defaultValue = 'light';
const initialValue = BROWSER ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;

const theme = writable<string>(initialValue);
theme.subscribe((value) => {
	if (BROWSER) {
		window.localStorage.setItem('theme', value === 'dark' ? 'dark' : 'light');
	}
});

export default theme;
