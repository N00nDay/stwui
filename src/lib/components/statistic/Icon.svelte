<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcons;

	const defaultClass =
		'material-icons text-5xl transition-all duration-150 text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd class="absolute -top-3 -right-2">
	<span class={finalClass} style={$$props.style}>{icon}</span>
</dd>
