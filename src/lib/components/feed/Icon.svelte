<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcon;

	const defaultClass = 'material-icons text-xl text-white';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass}>{icon}</span>
