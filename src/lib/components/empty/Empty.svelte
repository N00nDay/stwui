<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'text-center';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass}>
	<slot name="icon" />
	<slot name="title" />
	<slot name="description" />
	<slot name="action" />
	<slot />
</div>
