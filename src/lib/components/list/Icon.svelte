<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcons;

	const defaultClass = 'material-icons text-2xl text-white bg-primary transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass}>{icon}</span>
