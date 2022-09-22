<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'pl-2';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass}><slot /></span>
