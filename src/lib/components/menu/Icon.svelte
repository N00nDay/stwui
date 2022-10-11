<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcon;

	const defaultClass = 'material-icons h-6 w-6 min-h-6 min-w-6 mr-3';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}>{icon}</span>
