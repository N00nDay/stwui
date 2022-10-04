<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { CHIP_CONTEXT_ID } from './Chip.svelte';

	let defaultClass =
		'flex-shrink-0 ml-2 h-8 w-8 rounded-full inline-flex items-center justify-center outline-none focus:outline-none hover:text-white dark:hover:text-white';

	const defaultDefaults =
		' hover:bg-light-background dark:hover:bg-dark-background text-light-content hover:text-light-content dark:text-dark-content dark:hover:text-dark-content';
	const infoDefaults =
		' hover:bg-info-background dark:hover:bg-dark-info-background text-info-content dark:text-dark-info-content';
	const successDefaults =
		' hover:bg-success-background dark:hover:bg-dark-success-background text-success-content dark:text-dark-success-content';
	const warnDefaults =
		' hover:bg-warn-background dark:hover:bg-dark-warn-background text-warn-content dark:text-dark-warn-content';
	const errorDefaults =
		' hover:bg-error-background dark:hover:bg-dark-error-background text-error-content dark:text-dark-error-content';

	useContext({
		context_id: CHIP_CONTEXT_ID,
		parent: 'Chip',
		component: 'Chip.Close'
	});

	const { type }: { type: 'info' | 'success' | 'warn' | 'error' | 'default' } =
		getContext(CHIP_CONTEXT_ID);

	if (type === 'default') {
		defaultClass += defaultDefaults;
	} else if (type === 'info') {
		defaultClass += infoDefaults;
	} else if (type === 'success') {
		defaultClass += successDefaults;
	} else if (type === 'warn') {
		defaultClass += warnDefaults;
	} else if (type === 'error') {
		defaultClass += errorDefaults;
	}

	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<button on:click type="button" class={finalClass}>
	<span class="sr-only">Remove option</span>
	<span class="material-icons">close</span>
</button>
