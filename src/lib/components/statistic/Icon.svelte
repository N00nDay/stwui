<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcon;

	const defaultClass = 'material-icons text-5xl text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd class="absolute -top-3 -right-2">
	<span class={finalClass} style={$$props.style}>{icon}</span>
</dd>
