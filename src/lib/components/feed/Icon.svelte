<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcons;

	const defaultClass = 'material-icons text-xl text-white bg-primary';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass}>{icon}</span>
