<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { MaterialIcon } from '../../types';

	export let icon: MaterialIcon;

	const defaultClass = 'material-icons text-sm absolute right-0.5';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}>{icon}</span>
