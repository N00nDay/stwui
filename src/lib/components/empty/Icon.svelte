<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcons;

	const defaultClass = 'material-icons text-light-icon dark:text-dark-icon mx-auto text-5xl';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass}>{icon}</span>
