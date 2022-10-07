<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcon;

	const defaultClass =
		'relative cursor-pointer flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full transition-reveal scale-90 hover:scale-100 hover:bg-opacity-20 hover:active:scale-95 pointer-events-auto text-light-surface';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style} on:click>
	<span class="material-icons text-3xl text-current"> {icon} </span>
	<span class="sr-only">Rotate Left</span>
</div>
