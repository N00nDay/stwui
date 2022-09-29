<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Progress from '../progress';

	export let progress: number;

	const defaultClass = 'mt-2';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd class={finalClass} style={$$props.style}>
	<Progress value={progress} />
</dd>
