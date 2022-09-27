<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcons;

	const defaultClass =
		'relative z-10 cursor-pointer flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full scale-95 hover:scale-100 hover:bg-opacity-20 hover:active:scale-95 transition-all duration-150 pointer-events-auto text-light-surface';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} on:click>
	<span class="material-icons text-3xl text-current"> {icon} </span>
	<span class="sr-only">Rotate Left</span>
</div>
