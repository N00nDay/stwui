<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let placement: 'start' | 'center' | 'end' = 'start';

	const defaultClass = 'ml-3 flex justify-end flex-shink';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:items-start={placement === 'start'}
	class:items-center={placement === 'center'}
	class:items-end={placement === 'end'}
>
	<slot />
</div>
