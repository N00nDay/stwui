<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'mt-1 text-sm flex flex-row justify-between items-center tracking-tight';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd class={finalClass} style={$$props.style}>
	<slot name="value" />
	<slot name="trend" />
</dd>
