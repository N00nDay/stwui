<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { MaterialIcon } from '../../types';

	export let icon: MaterialIcon;

	const defaultClass = 'material-icons';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}>{icon}</span>
