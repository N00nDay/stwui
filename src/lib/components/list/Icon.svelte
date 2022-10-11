<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcon;

	const defaultClass = 'material-icons text-2xl text-white bg-primary';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}>{icon}</span>
