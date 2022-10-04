<script lang="ts">
	import type MaterialIcons from '$lib/types/material-icons';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcons;

	const defaultClass =
		'material-icons px-2 bg-light-surface dark:bg-dark-surface text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass}>{icon}</span>
