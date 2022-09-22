<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'h-10 w-10';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass}>
	<slot name="icon" />
	<slot name="avatar" />
	<slot />
</div>
