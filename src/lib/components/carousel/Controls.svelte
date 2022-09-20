<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'fixed z-20 top-2 left-2 flex flex-row gap-2';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass}>
	<slot />
</div>
