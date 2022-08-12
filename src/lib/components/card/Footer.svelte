<script lang="ts">
	import { useCardContext } from './Card.svelte';

	useCardContext('CardFooter');
</script>

<div
	class="px-4 py-5 sm:px-6 first:rounded-t-md last:rounded-b-rounded-b-md last:border-t last:border-gray-200 only:border-none{$$props.class
		? ` ${$$props.class}`
		: ''}"
>
	<slot />
</div>
